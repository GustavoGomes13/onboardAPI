import { OrdersEntity } from "src/orders/orders.entity";
import { ProductsEntity } from "src/product/products.entity";
import { Column, Double, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order_products' })
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
    // ManyToOne pro produto
    @ManyToOne(() => ProductsEntity, product => product.id, {
        
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