/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put, Param,Headers } from '@nestjs/common';
import {MakerService} from './marker.service'
import * as mongoose from 'mongoose';
@Controller('marker')
export class MarkerController {
    constructor(private markerService: MakerService) { }

    @Get(':id')
    getAll(@Param('id') ServiceId: string) {
        
        return this.markerService.getMarker(ServiceId);
    }
    @Get('getBySystemId/:id')
    getById(@Param('id') id: string) {
        return this.markerService.getMarkersBySystemId(id)
    }

    @Post('addMarker')
   
    addMarker(
        @Body('manager_id') manager_id: mongoose.Schema.Types.ObjectId,
        @Body('system_id') system_id: mongoose.Schema.Types.ObjectId,
        @Body('description') description:string,
        @Body('notes') notes: string,
        @Body('email') email: string,
        @Body('phone') phone: string,
       @Body('location')location:{lat:number,lng:number},
       
        @Body('name') name: string,
    ) {
        return this.markerService.addMarker(manager_id,system_id,location,description,name,notes,email,phone);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.markerService.delete(id);
    }
    @Put(':id')
    async update(@Param('id') id: string,
   

    @Body('description') description:string,
    @Body('notes') notes: string,
    @Body('email') email: string,
    @Body('phone') phone: string,   
    @Body('location')location:{lat:number,lng:number},
    @Body('name') name: string,) {
        return this.markerService.updateMarker(id,location,description,name,notes,email,phone);     
    }

}
