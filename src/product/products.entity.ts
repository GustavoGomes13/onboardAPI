import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({ name: 'product' })
export class ProductsEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ name: 'name', type: 'varchar', length: '60' })
    name: string;

    @Column({ name: 'provider', type: 'varchar', length: '60' })
    provider: string;

    @Column({ name: 'price', type: 'double' })
    price: number;

    /*
    @ManyToOne()
    private id_product_category: number;
    
    
    @ManyToOne()
    @JoinColumn({ name: "cat_id" })
    category: Category;
    */
}