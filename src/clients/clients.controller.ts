import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { ClientsEntity } from "./clients.entity";
import { ClientsService } from "./clients.service";

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get()
    findAll() {
        return this.clientsService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.clientsService.findOne(id);
    }

    @Post()
    insert(@Body() client: ClientsEntity) {
        return this.clientsService.insertClient(client);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() client: ClientsEntity) {
        client.id = id;
        return this.clientsService.updateClient(client);
    }

    @Delete(':id')
    deleteClient(@Param('id') id: number) {
        return this.clientsService.deleteClient(id);
    }
    
}