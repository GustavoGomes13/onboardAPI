import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'order-product' })
export class OrderProduct {
    @PrimaryGeneratedColumn()
    id: number;

    //@ManyToOne Pedidos que possuem o item
    //id do item
    
    @Column({
        name: 'quantity',
        nullable: false,
        type: 'number',
    })
    quantity: number;


}