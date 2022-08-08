/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';

@Injectable()
export class SystemService {

  constructor(@InjectModel('System') private readonly systemModel: Model<System> ) { }

  async addSystem(topic:string,objectName:string,description:string,communication:string){
    const newSystem = new this.systemModel({topic,objectName,description,communication});
    const result=  await newSystem.save();
    console.log(result);
  }
  async getSystem() {
    const result = await this.systemModel.find();
    return result;
  }
}
