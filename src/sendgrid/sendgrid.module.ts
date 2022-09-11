/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';
import { SendgridController } from './sendgrid.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [SendgridController],
  providers: [SendgridService],
  exports: [SendgridService],
})
export class SendgridModule { }
