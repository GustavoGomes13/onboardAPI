import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { ClientsEntity } from './clients/clients.entity';
import { ClientsService } from './clients/clients.service';
import { OrderProductsController } from './order-products/order-products.controller';
import { OrderProductsEntity } from './order-products/order-products.entity';
import { OrderProductsService } from './order-products/order-products.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersEntity } from './orders/orders.entity';
import { OrdersService } from './orders/orders.service';
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
      OrdersEntity,
      OrderProductsEntity,
    ],
    synchronize: true,
    logging: true,
  }),
  TypeOrmModule.forFeature([
      ClientsEntity, 
      ProductsEntity,
      ProductsCategoryEntity,
      OrdersEntity,
      OrderProductsEntity,
    ])
],
  controllers: [
    AppController, 
    ClientsController,
    ProductsController,
    ProductsCategoryController,
    OrdersController,
    OrderProductsController,
  ],
  providers: [
    AppService, 
    ClientsService,
    ProductsService,
    ProductsCategoryService,
    OrdersService,
    OrderProductsService,
  ],
})
export class AppModule {}
