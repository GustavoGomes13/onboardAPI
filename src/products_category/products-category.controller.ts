import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsCategoryEntity } from "./products-category.entity";
import { ProductsCategoryService } from "./products-category.service";

@Controller('product-category')
export class ProductsCategoryController {
    constructor(private readonly productsCategoryService: ProductsCategoryService) {}

    @Get()
    findAll() {
        return this.productsCategoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsCategoryService.findOne(id);
    }

    @Post()
    insert(@Body() productsCategory: ProductsCategoryEntity) {
        return this.productsCategoryService.insertProductCategory(productsCategory);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() productsCategory: ProductsCategoryEntity) {
        productsCategory.id = id;
        return this.productsCategoryService.updateProductCategory(productsCategory);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsCategoryService.deleteProductCategory(id);
    }
}