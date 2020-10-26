import { Column, Double, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity( { name: 'order' })
export class OrdersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    //@OneToOne Nome do cliente

    //@OneToMany Items do pedido
    //nome do item, valor unitario


    @Column({
        name: 'total_value',
        nullable: false,
        type: 'double',
    })
    total_value: Double;
}