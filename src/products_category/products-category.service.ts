import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { ProductsCategoryEntity } from "./products-category.entity";


@Injectable()
export class ProductsCategoryService {
    constructor(
        @InjectRepository(ProductsCategoryEntity)
        private readonly productsCategoryRepository: Repository<ProductsCategoryEntity>
    ) {}

    findAll() {
        return this.productsCategoryRepository.find();
    }

    findOne(id: number) {
        return this.productsCategoryRepository.findOne(id);
    }

    insertProductCategory(productCategory: ProductsCategoryEntity) {
        return this.productsCategoryRepository.save(productCategory);
    }

    async updateProductCategory(productCategory: ProductsCategoryEntity) {
        const productCategoryToUpdate = this.findOne(productCategory.id);
        return this.productsCategoryRepository.update(await productCategoryToUpdate, productCategory);
    }

    deleteProductCategory(id: number) {
        return this.productsCategoryRepository.delete(id);
    }
}
