import { OrdersEntity } from "src/orders/orders.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";

// name = nome da tabela no banco
@Entity({ name: 'client'})
export class ClientsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        name: 'name', 
        nullable: false, 
        type: 'varchar', 
        length: 50 
    })
    name: string;
    
    @Column({ 
        name: 'cpf', 
        nullable: false, 
        type: 'varchar', 
        length: 14 
    })
    cpf: string;

    @Column({ 
        name: 'address', 
        nullable: false, 
        type: 'varchar', 
        length: 90
    })
    address: string;

    @Column({ 
        name: 'phone_number', 
        type: 'char', 
        length: 11 
    })
    phone_number: string;

    // relacionamento pedido
    @OneToMany(() => OrdersEntity, orders => orders.id)
    @JoinColumn()
    orders: OrdersEntity;
}