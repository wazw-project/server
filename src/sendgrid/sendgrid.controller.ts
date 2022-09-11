/* eslint-disable prettier/prettier */
import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('mail')
export class SendgridController {
  constructor(private readonly sendgridService: SendgridService) {}

  @Post()
  async sendEmail(@Query('email') email) {
    console.log('mail controller')
    const mail = {
      to: email,
      subject: 'Your request has been sent',
      from: 't0556780532@gmail.com',
      text: 'Hello',
      html: '<h1>Your request has been sent to the administrator of this system </h1> <p>If your request is approved by the manager, you will receive an update on this.</p>',
    };
    console.log(mail);
    return await this.sendgridService.send(mail);
  }
}
