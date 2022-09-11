import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { Mail } from './sendgrid.model';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SendgridService {
  constructor() 
  {
    // Don't forget this one.
    // The apiKey is required to authenticate our
    // request to SendGrid API.
    // this.configService.get<string>('SEND_GRID_KEY')
    SendGrid.setApiKey(process.env.SEND_GRID_KEY);
  }

  send(mail: SendGrid.MailDataRequired) {
    console.log('mail service');
    console.log(mail);
    SendGrid.send(mail)
      .then((res) => {
        console.log(res);
        const transport = res;
        console.log(transport);
        // avoid this on production. use log instead :)
        console.log(`E-Mail sent to ${mail.to}`);
        return transport;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
