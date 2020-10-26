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
import { ProductsTypesController } from './products_types/products-type.controller';
import { ProductsTypesEntity } from './products_types/products-types.entity';
import { ProductsTypesService } from './products_types/products-types.service';

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
      ProductsTypesEntity,
    ],
    synchronize: true,
    logging: true,
  }),
  TypeOrmModule.forFeature([
      ClientsEntity, 
      ProductsEntity,
      ProductsTypesEntity,
    ])
],
  controllers: [
    AppController, 
    ClientsController,
    ProductsController,
    ProductsTypesController,
  ],
  providers: [
    AppService, 
    ClientsService,
    ProductsService,
    ProductsTypesService,
  ],
})
export class AppModule {}
