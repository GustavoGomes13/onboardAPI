import { OrdersEntity } from "src/orders/orders.entity";
import { ProductsEntity } from "src/product/products.entity";
import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order_products' })
export class OrderProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // Pedido que possuem o item
    @ManyToOne(() => OrdersEntity, o => o.order_products)
    order: OrdersEntity;
    
    // id do item
    // ManyToOne pro produto
    @ManyToOne(() => ProductsEntity, p => p.order_products, {
        eager: true
    })
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