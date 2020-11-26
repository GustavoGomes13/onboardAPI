import { Controller, Get, Post, Put, Delete, Body, Param, Render } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsEntity } from './products.entity';
import { ProductsCategoryService } from 'src/products_category/products-category.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService, 
        private readonly productsCategoryService: ProductsCategoryService
        ) {}

    
    @Get()
    @Render('products.hbs')
    async findAll() {
        const products = await this.productsService.findAll();
        const products_category = await this.productsCategoryService.findAll();
        return { products, products_category }
    }
    
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    insert(@Body() product: ProductsEntity) {
        return this.productsService.insertProduct(product);
    }

    @Put('edit-product/:id')
    update(@Param('id') id: number, @Body() product: ProductsEntity) {
        product.id = id;
        return this.productsService.updateproduct(product);
    }

    @Delete(':id')
    deleteproduct(@Param('id') id: number) {
        return this.productsService.deleteproduct(id);
    }
}