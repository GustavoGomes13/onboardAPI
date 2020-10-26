import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsEntity } from './products.entity';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    findAll() {
        return this.productsService.findAll();
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
    update(@Param('id') id: string) {
        return 'Atualiza o produto';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Deleta o produto';
    }
}