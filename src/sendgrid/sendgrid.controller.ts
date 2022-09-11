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
      subject: 'Hello from sendgrid',
      from: 't0556780532@gmail.com',
      text: 'Hello',
      html: '<h1>Hello</h1>',
    };
    console.log(mail);
    return await this.sendgridService.send(mail);
  }
}
