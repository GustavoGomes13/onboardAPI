import { OrdersEntity } from "src/orders/orders.entity";
import { ProductsEntity } from "src/product/products.entity";
import { Column, Double, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order-products' })
export class OrderProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // Pedido que possuem o item
    @ManyToOne(() => OrdersEntity, order => order.id, {
        eager: true
    })
    @JoinColumn()
    order: OrdersEntity;
    
    // id do item
    @ManyToMany(() => ProductsEntity, {
        eager: true
    })
    @JoinColumn()
    products: ProductsEntity;
    
    @Column({
        name: 'quantity',
        nullable: false,
        type: 'int',
    })
    quantity: number;

    @Column({
        name: 'total_price',
        nullable: false,
        type: 'double',
    })
    total_price: Double;
}