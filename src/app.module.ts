/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemModule } from './systems/system.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/waze-project'),
    UserModule,
    SystemModule
  ],
})
export class AppModule {}
