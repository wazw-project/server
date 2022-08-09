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
    return result;
   
  }
  async getSystem() {
    const result = await this.systemModel.find().exec();
    return result;
  }
  async delete(id: string) {
    const deletedSystem = await this.systemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedSystem;
  }
  async updateSystem(systemId:string, topic, objectName, description, communication) {
    const updateSystem = await this.systemModel.findById(systemId)
    if (topic) { updateSystem.topic = topic }
    if (objectName) { updateSystem.objectName = objectName }
    if (description) { updateSystem.description = description }
    if (communication) { updateSystem.communication = communication }
    updateSystem.save();

  }
}
