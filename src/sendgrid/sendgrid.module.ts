/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MailController } from './sendgrid.controller';
import { SendgridService } from './sendgrid.service';


@Module({
  imports: [],
  controllers: [MailController],
  providers: [SendgridService],
})
export class SendgridModule {}
