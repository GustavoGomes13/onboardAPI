import { Body, Controller, Get, Param, Post, Put, Render } from "@nestjs/common";
import { OrdersEntity } from "./orders.entity";
import { OrdersService } from "./orders.service";

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Render('orders.hbs')

    @Get()
    findAll() {
        return this.ordersService.findAll();
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