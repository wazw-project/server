/* eslint-disable prettier/prettier */
import { Body, Controller, Get,Post,Param,Delete, Put } from '@nestjs/common';
import { Role } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return  this.userService.getUsers();
    
  }
  @Get(':id')
  getUserById(@Param('id') managerId: string) {
      return this.userService.getUserById(managerId);
  }
  @Post('addUser')
  signup(@Body('role') role:Role,
        @Body('firstName') firstName:string,
        @Body('lastName') lastName:string,
        @Body('phone') phone:string,
        @Body('email') email:string){
    return this.userService.AddUser(role,firstName,lastName,phone,email);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
      return this.userService.delete(id);
  }
  @Put(':id')
  async updateUser(
        @Body('role') role:Role,
        @Body('firstName') firstName:string,
        @Body('lastName') lastName:string,
        @Body('phone') phone:string,
        @Body('email') email:string,
        @Param('id') id:string
  ){
    return this.userService.updateUser(id,role,firstName,lastName,phone,email)
  }
}
