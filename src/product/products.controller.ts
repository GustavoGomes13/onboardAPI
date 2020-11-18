import { Controller, Get, Post, Put, Delete, Body, Param, Render } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsEntity } from './products.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Render('products.hbs')

    @Get()
    async findAll() {
        const products = await this.productsService.findAll();
        return { products }
    }
    
    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productsService.findOne(id);
    }

    @Post()
    insert(@Body() product: ProductsEntity) {
        return this.productsService.insertProduct(product);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() product: ProductsEntity) {
        product.id = id;
        return this.productsService.updateproduct(product);
    }

    @Delete(':id')
    deleteproduct(@Param('id') id: number) {
        return this.productsService.deleteproduct(id);
    }
}