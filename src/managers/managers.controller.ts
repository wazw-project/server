/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Post, Put, Param,Headers } from '@nestjs/common';
import { ManagersService } from './managers.service';
import * as mongoose from 'mongoose';
import { Role } from './managers.model';
@Controller('managers')
export class ManagersController {
    constructor(private managerService: ManagersService) { }

    @Get(':id')
    getByManagerId(@Param('id') managerId: string) {
        
        return this.managerService.getManagersById(managerId);
    }
    @Get(':id/:systemId')
    getByManagerByUserIdAndSystemId(@Param('id') userId: string, @Param('systemId') system_id: string,) 
    {
        return this.managerService.getByManagerByUserIdAndSystemId(userId,system_id)
    }

    @Post('addManagers')

    addManager(
        
        @Body('user_id') user_id: mongoose.Schema.Types.ObjectId,
        @Body('system_id') system_id: mongoose.Schema.Types.ObjectId,
        @Body('active') active: boolean,     
        @Body('display_name') display_name: string,      
        @Body('invitation_sent') invitation_sent: string,
        @Body('role') role: Role,
    ) {
        return this.managerService.addManagers(user_id,system_id,active,display_name,role,invitation_sent);
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.managerService.delete(id);
    }
   
}
