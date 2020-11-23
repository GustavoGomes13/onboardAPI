import { Controller, Get, Post, Put, Delete, Body, Param, Render } from "@nestjs/common";
import { ClientsEntity } from "./clients.entity";
import { ClientsService } from "./clients.service";

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}
   
    /* old 
    @Get()
    findAll() {
        return this.clientsService.findAll();
    }
    */

    // Novo
    @Get()
    @Render('clients.hbs')
    async findAll() {
        const clients = await this.clientsService.findAll();
        return { clients };
    }

    /*
    @Get()
    @Render('clients.hbs')
    root() {
        return this.clientsService.findAll;
    }
    */

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
    
    /*
    @Delete(':id')
    async deleteClient(@Param('id') id: number) {
        const clients = await this.clientsService.deleteClient(id);
        return { clients };
    }
    */

}