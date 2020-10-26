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
    ],
    synchronize: false,
    logging: true,
  }),
  TypeOrmModule.forFeature([
      ClientsEntity, 
      ProductsEntity,
    ])
],
  controllers: [
    AppController, 
    ClientsController,
    ProductsController,
  ],
  providers: [
    AppService, 
    ClientsService,
    ProductsService,
  ],
})
export class AppModule {}
