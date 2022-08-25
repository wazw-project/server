/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestSchema } from './request.model';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Request', schema: RequestSchema}])],
  controllers: [RequestController],
  providers: [RequestService],
})
export class RequestModule {}