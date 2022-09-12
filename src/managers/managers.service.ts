/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Managers,Role } from './managers.model';
import * as mongoose from 'mongoose';
@Injectable()
export class ManagersService {

  constructor(@InjectModel('Managers') private readonly managersModel: Model<Managers>) { }

  async addManagers( 
    user_id: mongoose.Schema.Types.ObjectId,
    system_id: mongoose.Schema.Types.ObjectId,
    active: boolean,
    display_name: string,
    role: Role,
    invitation_sent: string,) {
    try {
      const newManagers = new this.managersModel({user_id,system_id,active,display_name,role,invitation_sent});
      const result = await newManagers.save();
      console.log("add manager: ",result);
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getByManagerByUserIdAndSystemId(user_id,system_id) {
    try {
      const result = await this.managersModel.findOne({"user_id":user_id,"system_id":system_id}).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getManagersById(id) {
    try {    
      const result = await this.managersModel.findById(id).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }

  async delete(id: string) {
    try{
      const deleteManagers = await this.managersModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleteManagers;
    }catch(error){
      return error
    }
   
  }
  
   

  
}
