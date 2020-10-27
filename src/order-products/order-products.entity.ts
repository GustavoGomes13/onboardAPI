import { Column, Double, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order-products' })
export class OrderProducts {
    @PrimaryGeneratedColumn()
    id: number;

    //@ManyToOne Pedido que possuem o item
    
    //@ManyToMany id do item
    
    @Column({
        name: 'quantity',
        nullable: false,
        type: 'number',
    })
    quantity: number;

    @Column({
        name: 'total_price',
        nullable: false,
        type: 'double',
    })
    total_price: Double;
}