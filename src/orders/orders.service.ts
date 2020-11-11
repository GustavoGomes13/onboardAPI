import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrdersEntity } from "./orders.entity";

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(OrdersEntity)
        private readonly ordersRepository: Repository<OrdersEntity>
    ) {}

    findAll() {
        return this.ordersRepository.find();
    }

    findOne(id: number) {
        return this.ordersRepository.findOne(id);
    }

    createOrder(order: OrdersEntity) {
        return this.ordersRepository.save(order);
    }

    async updateOrder(order: OrdersEntity) {
        const orderToUpdate = this.findOne(order.id);
        return this.ordersRepository.update(await orderToUpdate, order)
    }
    // cancelar o item e lançar novo

    /* Não vai ser possivel deletar um pedido
    deleteOrder(id: number) {
        return this.ordersRepository.delete(id);
    }
    */
}