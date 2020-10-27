import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsEntity } from './clients/clients.entity';
import { ClientsService } from './clients/clients.service';
import { ProductsController } from './product/products.controller';
import { ProductsEntity } from './product/products.entity';
import { ProductsService } from './product/products.service';
import { ProductsCategoryController } from './products_category/products-category.controller';
import { ProductsCategoryEntity } from './products_category/products-category.entity';
import { ProductsCategoryService } from './products_category/products-category.service';

@Module({
  imports: [   
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'onboard',
    entities: [
      ClientsEntity,
      ProductsEntity,
      ProductsCategoryEntity,
    ],
    synchronize: true,
    logging: true,
  }),
  TypeOrmModule.forFeature([
      ClientsEntity, 
      ProductsEntity,
      ProductsCategoryEntity,
    ])
],
  controllers: [
    AppController, 
    ClientsController,
    ProductsController,
    ProductsCategoryController,
  ],
  providers: [
    AppService, 
    ClientsService,
    ProductsService,
    ProductsCategoryService,
  ],
})
export class AppModule {}
