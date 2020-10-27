import { ProductsCategoryEntity } from "src/products_category/products-category.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'product' })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ 
        name: 'name', 
        type: 'varchar', 
        length: '60' 
    })
    name: string;

    @Column({ 
        name: 'provider', 
        type: 'varchar', 
        length: '60' })
    provider: string;

    @Column({ 
        name: 'price', 
        type: 'double' 
    })
    price: number;

    @ManyToOne(() => ProductsCategoryEntity, product_category => product_category.id)
    @JoinColumn({ name: "product_category_id" })
    category: ProductsCategoryEntity;

    /*
    @ManyToOne()
    private id_product_category: number;
    */ 
}