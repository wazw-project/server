/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put, Param,Headers } from '@nestjs/common';
import { RequestService } from './request.service';
import * as mongoose from 'mongoose';
@Controller('request')
export class RequestController {
    constructor(private requestService: RequestService) { }

    @Get('getBySystemId/:id')
    getAll(@Param('id') systemId: string) {
        
        return this.requestService.getAllRequestForSystem(systemId);
    }
    @Get(':id')
    getById(@Param('id') id: string) {
        return this.requestService.getRequest(id)
    }

    @Post('addRequest')
   
    addRequest(
     
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,     
        @Body('email') email: string,
        @Body('phone') phone: string,       
        @Body('display_name') display_name: string,
        @Body('notes') notes: string,
        @Body('system_id') system_id: mongoose.Schema.Types.ObjectId,
        @Body('user_id') user_id: mongoose.Schema.Types.ObjectId,
        @Body('location')location:{lat:number,lng:number},
    ) {
        return this.requestService.addRequest(firstName,lastName,email,phone,system_id,user_id,display_name,notes,location);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.requestService.delete(id);
    }
   
}
