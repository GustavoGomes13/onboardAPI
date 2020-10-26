import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsTypesEntity } from "./products-types.entity";
import { ProductsTypesService } from "./products-types.service";

@Controller('product-types')
export class ProductsTypesController {
    constructor(private readonly productsTypesService: ProductsTypesService) {}

    @Get()
    findAll() {
        return this.productsTypesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsTypesService.findOne(id);
    }

    @Post()
    insert(@Body() productsTypes: ProductsTypesEntity) {
        return this.productsTypesService.insertProductType(productsTypes);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() productsTypes: ProductsTypesEntity) {
        productsTypes.id = id;
        return this.productsTypesService.updateProductType(productsTypes);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productsTypesService.deleteProductType(id);
    }
}