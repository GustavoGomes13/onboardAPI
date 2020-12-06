import { OrderProductsEntity } from "src/order-products/order-products.entity";
import { ProductsCategoryEntity } from "src/products_category/products-category.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity({ name: 'product' })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ 
        name: 'name',
        nullable: false,
        type: 'varchar', 
        length: '60' 
    })
    name: string;

    @Column({ 
        name: 'provider', 
        type: 'varchar', 
        length: '60' 
    })
    provider: string;

    @Column({ 
        name: 'price', 
        type: 'double' 
    })
    price: number;

    @ManyToOne(() => ProductsCategoryEntity, product_category => product_category.id, {
        // Opção faz com que os relacionamentos sejam exibidos nas querys
        eager: true
    })
    @JoinColumn({ name: "product_category_id" })
    category: ProductsCategoryEntity;

    //@OneToMany() order-products - adicionado recentemente
    @OneToMany(() => OrderProductsEntity, order_products => order_products.id, {

    })
    @JoinColumn()
    order_products: OrderProductsEntity;

}