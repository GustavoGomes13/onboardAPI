import { Body, Controller, Get, Param, Post, Put, Render } from "@nestjs/common";
import { ClientsService } from "src/clients/clients.service";
import { OrderProductsService } from "src/order-products/order-products.service";
import { ProductsService } from "src/product/products.service";
import { OrdersEntity } from "./orders.entity";
import { OrdersService } from "./orders.service";

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly clientsService: ClientsService,
        private readonly productsService: ProductsService,
        private readonly ordersProductService: OrderProductsService,
        ) {}

    
    @Get()
    @Render('orders.hbs')
    async findAll() {
        const orders = await this.ordersService.findAll();
        const clients = await this.clientsService.findAll();
        const products = await this.productsService.findAll();
        const orderProducts = await this.ordersProductService.findAll();
        return { orders, clients, products, orderProducts }
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.ordersService.findOne(id);
    }

    @Post()
    insert(@Body() order: OrdersEntity) {
        return this.ordersService.createOrder(order);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() order: OrdersEntity) {
        order.id = id;
        return this.ordersService.updateOrder(order);
    }
}