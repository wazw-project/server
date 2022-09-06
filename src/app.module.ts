/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './systems/system.module';
import { MarkerModule } from './Markers/marker.module';
import { RequestModule } from './request/request.module';
import { ManagersModule } from './managers/managers.module';
@Module({
  imports: [
    //mongodb://localhost:27017/waze-project
   MongooseModule.forRoot('mongodb+srv://naama_frank-kod:VWSi2A2igrlqgFCw@cluster0.sddzqju.mongodb.net/waze-final-project?retryWrites=true&w=majority'),                              
   
                          
    UserModule,
    SystemModule,
    MarkerModule,
    RequestModule,
    ManagersModule
  ],
})
export class AppModule {}
