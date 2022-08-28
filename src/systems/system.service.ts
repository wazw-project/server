/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System } from './system.model';
import * as mongoose from 'mongoose';
@Injectable()
export class SystemService {

  constructor(@InjectModel('System') private readonly systemModel: Model<System>) { }

  async addSystem(topic: string,
    objectName: string,
    managerUid: mongoose.Schema.Types.ObjectId,
    description: string,
    email: string,
    phone: string,
    urlName: string,
    urlImage: string) {
    try {
      const newSystem = new this.systemModel({ topic, objectName, managerUid, description, email, phone, urlName, urlImage });
      const result = await newSystem.save();
      console.log(result);
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getSystem(id) {
    try {
      const result = await this.systemModel.find({ "managerUid": id }).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getAllSystem() {
    try {
      const result = await this.systemModel.find().exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getSystemById(id: string) {
    try {
      const result = await this.systemModel.findById(id).exec();
      return result;
    } catch (err) {
      console.log(err)
    }

  }
  
  async delete(id: string) {
    try{
      const deletedSystem = await this.systemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedSystem;
    }catch(error){
      return error
    }
   
  }
  async updateSystem(systemId: string, topic: string, objectName: string, description: string, email: string, phone: string, urlName: string, urlImage: string) {
    try{
      const updateSystem = await this.systemModel.findById(systemId)
      if (topic) { updateSystem.topic = topic }
      if (objectName) { updateSystem.objectName = objectName }
      if (description) { updateSystem.description = description }
      if (email) { updateSystem.email = email }
      if (phone) { updateSystem.phone = phone }
      if (urlName) { updateSystem.urlName = urlName }
      if (urlImage) { updateSystem.urlImage = urlImage }
      updateSystem.save();
    }
    catch(error){
      return error
    }
   

  }
}
