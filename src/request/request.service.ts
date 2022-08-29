/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Request,Status} from './request.model'
import * as mongoose from 'mongoose';
@Injectable()
export class RequestService {

  constructor(@InjectModel('Request') private readonly requestModel: Model<Request>) { }

  async addRequest( 
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    system_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    display_name: string, 
    notes: string,
    location:
    {lat: number,
      lng: number}
   
    ) {
    try {
      const newRequest = new this.requestModel({firstName,lastName,email,phone,system_id,display_name,notes,location});
      const result = await newRequest.save();
      console.log(result);
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getAllRequestForSystem(system_id:string) {
    try {
      const result = await this.requestModel.find({"system_id":system_id}).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getRequest(id) {
    try {    
      const result = await this.requestModel.findById(id).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }

  async delete(id: string) {
    try{
      const deleteRequest = await this.requestModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleteRequest;
    }catch(error){
      return error
    }
   
  }
  
   

  
}
