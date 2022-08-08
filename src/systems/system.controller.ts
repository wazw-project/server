/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
    constructor(private systemService: SystemService) { }

    @Get()
    getAll() {
        return this.systemService.getSystem();
    }

    @Post('addSystem')
    addSystem(
        @Body('topic') topic: string,
        @Body('objectName') objectName: string,
        @Body('description') description: string,
        @Body('communication') communication: string
    ) {
        return this.systemService.addSystem(topic, objectName, description, communication);
    }
    


}
