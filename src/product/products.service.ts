import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly repository: Repository<ProductsEntity>
    ) {}

        
    findAll() {
        return this.repository.find();
    }

    findOne(id: number) {
        return this.repository.findOne(id)
    }
    
    insertProduct(product: ProductsEntity) {
        return this.repository.save(product);

        // validar se tem ID, pra fazer update e se não tem cria novo
    }
    /*
    update(product: ProductsEntity) {

    }
    */
}