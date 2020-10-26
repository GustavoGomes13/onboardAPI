import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { ProductsTypesEntity } from "./products-types.entity";


@Injectable()
export class ProductsTypesService {
    constructor(
        @InjectRepository(ProductsTypesEntity)
        private readonly productsTypesRepository: Repository<ProductsTypesEntity>
    ) {}

    findAll() {
        return this.productsTypesRepository.find();
    }

    findOne(id: number) {
        return this.productsTypesRepository.findOne(id);
    }

    insertProductType(productType: ProductsTypesEntity) {
        return this.productsTypesRepository.save(productType);
    }

    async updateProductType(productType: ProductsTypesEntity) {
        const productTypeToUpdate = this.findOne(productType.id);
        return this.productsTypesRepository.update(await productTypeToUpdate, productType);
    }

    deleteProductType(id: number) {
        return this.productsTypesRepository.delete(id);
    }
}
