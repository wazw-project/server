/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemController } from './system.controller';
import { SystemSchema } from './system.model';
import { SystemService } from './system.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'System', schema: SystemSchema}])],
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule {}