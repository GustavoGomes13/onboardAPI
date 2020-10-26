import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientsEntity } from './clients.entity';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(ClientsEntity)
        private readonly clientsRepository: Repository<ClientsEntity>
    ) {}
        
    findAll() {
        return this.clientsRepository.find();
    }

    findOne(id: number) {
        return this.clientsRepository.findOne(id)
    }

    insertClient(client: ClientsEntity) {
        return this.clientsRepository.save(client);
    }

    async updateClient(client: ClientsEntity) {
        const clientToUpdate = this.findOne(client.id);
        return this.clientsRepository.update(await clientToUpdate, client)
    }

    deleteClient(id: number) {
        return this.clientsRepository.delete(id);
    }

}