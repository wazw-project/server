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
    MongooseModule.forRoot('mongodb://localhost:27017/waze-project'),
    UserModule,
    SystemModule,
    MarkerModule,
    RequestModule,
    ManagersModule
  ],
})
export class AppModule {}
