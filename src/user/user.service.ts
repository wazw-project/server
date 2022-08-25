/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';


@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async AddUser(fireBaseUid:string, firstName: string, lastName: string, phone: string, email: string) {
    try {
      const newUser = new this.userModel({fireBaseUid, firstName, lastName, phone, email });
      const result = await newUser.save();
      return result;
    }
    catch(error){
       return error
    }
    
  }
  async getUsers() {
    try {
      const result = await this.userModel.find().exec();
      return result;

    }
    catch (err) {
      return err
    }
  }

  async getUserByFireBaseUid(Uid: string) {
    try {
      const newUser = await this.userModel.findOne({fireBaseUid:Uid}).exec();
      return newUser
    } catch (error) {
      return error
    }
  }
  async delete(id: string) {
    try {
      const deletedSystem = await this.userModel
        .findByIdAndRemove({ _id: id })
        .exec();
      return deletedSystem;
    } catch (error) {
      return error
    }
  }


  async updateUser(id: string, firstName: string, lastName: string, phone: string, email: string) {
    try {
      const updateSystem = await this.userModel.findById(id)
      if (firstName) { updateSystem.firstName = firstName }
      if (lastName) { updateSystem.lastName = lastName }
      if (email) { updateSystem.email = email }
      if (phone) { updateSystem.phone = phone }
      updateSystem.save();
      return updateSystem
    }
    catch (error) {
      return error
    }


  }
}