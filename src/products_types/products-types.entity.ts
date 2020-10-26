import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'productsTypes '})
export class ProductsTypesEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ 
        name: 'description',
        nullable:false,
        type: 'varchar',
        length: 50 
    })
    description: string;
}