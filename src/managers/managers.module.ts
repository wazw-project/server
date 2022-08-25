/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerSchema } from './managers.model';
import { ManagersController } from './managers.controller';
import { ManagersService } from './managers.service';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Managers', schema: ManagerSchema}])],
  controllers: [ManagersController],
  providers: [ManagersService],
})
export class ManagersModule {}
