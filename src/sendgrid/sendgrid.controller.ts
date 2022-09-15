/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('mail')
export class SendgridController {
  constructor(private readonly sendgridService: SendgridService) { }

  @Post()
  async sendEmail(@Query('email') email) {
    console.log('mail controller')
    const mail = {
      to: email,
      subject: 'Your request has been sent',
      from: 'searhsystem@gmail.com',
      text: 'Hello',
      html: '<h1>Your request has been sent to the administrator of this system </h1> <p>If your request is approved by the manager, you will receive an update on this.</p>',
    };
    console.log(mail);
    return await this.sendgridService.send(mail);
  }
  @Post('/manager')
  async sendEmailManager(@Query('email') email,
    @Body('userName') userName,
    @Body('systemName') systemName,
    @Body('urlName') urlName,
    @Body('systemId') systemId) {
    console.log('mail controller')
    const mail = {
      to: email,
      subject: 'confirm request',
      from: 'searhsystem@gmail.com',
      text: { userName } + ' send request to add marker in your system: ' + { systemName },
      html: `
       <h1>you can confirm </h1>
       <h2>${userName}send request to add marker in your system: ${systemName}</h2>
       
       <p>💗to confirm you have a link 💗</p>
       <p> the link in localhost!! you must run the server and client🤪</p>
        <a href='http://localhost:3000/Map/${urlName}/${systemId}?fromEmail=true'> confirm request</a> 
        `
    }
    console.log(mail);
    return await this.sendgridService.sendEmailManager(mail);
  }
  @Post('/confirm')
  async sendEmailConfirm(@Query('email') email,  @Body('userName') userName) {
    console.log('mail controller')
    const mail = {
      to: email,
      subject: 'Your request for marker confirm🎯',
      from: 'searhsystem@gmail.com',
      text: 'Hello',
      html: `<h1>
         ${userName},
             your request for open system confirm by manager, your marker added!!
          <h1/>
          <p>we happy for u, good luck🎉</p>
          `
    };
    console.log(mail);
    return await this.sendgridService.send(mail);
  }
}
