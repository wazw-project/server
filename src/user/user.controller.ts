import { Body, Controller, Get,Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getUsers();
  }

  @Post('addUser')
  signup(@Body('phone') phone:string, @Body('age') age:number, @Body('name') name:string){
    return this.userService.AddUser(phone,age,name);
  }
}
