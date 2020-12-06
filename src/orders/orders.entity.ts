import { ClientsEntity } from "src/clients/clients.entity";
import { OrderProductsEntity } from "src/order-products/order-products.entity";
import { Column, Double, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: 'orders' })
export class OrdersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    //@OneToOne Nome do cliente - antigo
    // manyto one
    @ManyToOne(() => ClientsEntity, client => client.id, {
        eager: true
    })
    @JoinColumn({ name: "client_id" })
    client: ClientsEntity;

    //@OneToMany Items do pedido
    //nome do item, valor unitario
    // acho q não precisa, mas pra testes vai ficar
    @OneToMany(() => OrderProductsEntity, order_products => order_products.id)
    @JoinColumn({ name: "order_products_id" })
    order_products: OrderProductsEntity;


    @Column({
        name: 'total_value',
        nullable: false,
        type: 'double',
    })
    total_value: Double;
}