import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderProductsEntity } from "./order-products.entity";
import { OrderProductsService } from "./order-products.service";

@Controller('order-products')
export class OrderProductsController {
    constructor(private readonly orderProductsService: OrderProductsService) {}

    @Get()
    findAll() {
        return this.orderProductsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.orderProductsService.findOne(id);
    }

    @Post()
    insertOrderProduct(@Body() orderProduct: OrderProductsEntity) {
        return this.orderProductsService.insertOrderProduct(orderProduct);
    }

    @Put(':id')
    updateOrderProduct(@Param('id') id: number, @Body() orderProduct: OrderProductsEntity) {
        orderProduct.id = id;
        return this.orderProductsService.updateOrderProduct(orderProduct);
    }

    @Delete(':id')
    deleteOrderProduct(@Param('id') id: number) {
        return this.orderProductsService.deleteOrderProduct(id);
    }
}