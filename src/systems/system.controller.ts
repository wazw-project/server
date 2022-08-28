/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put, Param,Headers } from '@nestjs/common';
import { SystemService } from './system.service';
import * as mongoose from 'mongoose';
@Controller('system')
export class SystemController {
    constructor(private systemService: SystemService) { }

    @Get(':id')
    getAll(@Param('id') managerId: string, @Headers() headers) {
        console.log(headers.authorization);
        return this.systemService.getSystem(managerId);
    }
    @Get()
    getAllSystem() {
      
        return this.systemService.getAllSystem();
    }
    @Get('systemById/:id')
    getById(@Param('id') id: string) {
        return this.systemService.getSystemById(id)
    }

    @Post('addSystem')
    addSystem(
        @Body('topic') topic: string,
        @Body('objectName') objectName: string,
        @Body('managerUid') managerUid: mongoose.Schema.Types.ObjectId,
        @Body('description') description: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('urlName') urlName: string,
        @Body('urlImage') urlImage: string,
    ) {
        return this.systemService.addSystem(topic, objectName, managerUid, description, email, phone, urlName, urlImage);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.systemService.delete(id);
    }
    @Put(':id')
    async update(@Param('id') id: string,
        @Body('topic') topic: string,
        @Body('objectName') objectName: string,
        @Body('description') description: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
        @Body('urlName') urlName: string,
        @Body('urlImage') urlImage: string,) {
        return this.systemService.updateSystem(id, topic, objectName, description, email, phone, urlName, urlImage)
    }

}
