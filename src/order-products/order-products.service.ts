import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OrderProductsEntity } from "./order-products.entity";

@Injectable()
export class OrderProductsService {
    constructor(
        @InjectRepository(OrderProductsEntity)
        private readonly clientsRepository: Repository<OrderProductsEntity>
    ) {}

    findAll() {
        return this.clientsRepository.find();
    }

    findOne(id: number) {
        return this.clientsRepository.findOne(id)
    }

    insertOrderProduct(order_product: OrderProductsEntity) {
        return this.clientsRepository.save(order_product);
    }

    async updateOrderProduct(order_product: OrderProductsEntity) {
        const orderProductToUpdate = this.findOne(order_product.id);
        return this.clientsRepository.update(await orderProductToUpdate, order_product);
    }

    deleteOrderProduct(id: number) {
        return this.clientsRepository.delete(id);
    }
}