import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductsEntity } from './products.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private readonly productsRepository: Repository<ProductsEntity>
    ) {}

        
    findAll() {
        return this.productsRepository.find();
    }

    findOne(id: number) {
        return this.productsRepository.findOne(id)
    }
    
    insertProduct(product: ProductsEntity) {
        return this.productsRepository.save(product);
    }

    async updateproduct(product: ProductsEntity) {
        const productToUpdate = this.findOne(product.id);
        return this.productsRepository.update(await productToUpdate, product)
    }

    deleteproduct(id: number) {
        return this.productsRepository.delete(id);
    }

}