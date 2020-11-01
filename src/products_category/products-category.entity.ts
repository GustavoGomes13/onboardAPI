import { ProductsEntity } from "src/product/products.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product_category' })
export class ProductsCategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ 
        name: 'name',
        nullable: false,
        type: 'varchar',
        length: 50 
    })
    name: string;

    /* Acho que não precisa
    @OneToMany(() => ProductsEntity, product => product.id)
    @JoinColumn({ name: 'product_id' })
    id_product: ProductsEntity[];
    */
}