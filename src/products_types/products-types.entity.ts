import { ProductsEntity } from "src/product/products.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductsTypesService } from "./products-types.service";

@Entity({ name: 'productsTypes '})
export class ProductsTypesEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ 
        name: 'description',
        nullable: false,
        type: 'varchar',
        length: 50 
    })
    description: string;

    @OneToMany( id => ProductsEntity, product => product.id)
    @JoinColumn({ name: 'product_id' })
    id_product: ProductsEntity;
}