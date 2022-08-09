/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, User } from './user.model';

@Injectable()
export class UserService {

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async AddUser(role: Role, firstName: string, lastName: string, phone: string, email: string) {
    const newUser = new this.userModel({ role, firstName, lastName, phone, email });
    const result = await newUser.save();
    console.log(result);
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

  async getUserById(id: string) {
    try {
      const newUser = await this.userModel.findById(id).exec();
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


  async updateUser(id:string,role: Role, firstName: string, lastName: string, phone: string, email: string) {
    try{
      const updateSystem = await this.userModel.findById(id)
      if (role) { updateSystem.role = role }
      if (firstName) { updateSystem.firstName = firstName }
      if (lastName) { updateSystem.lastName = lastName }
      if (email) { updateSystem.email = email }
      if (phone) { updateSystem.phone = phone }
      updateSystem.save();
    }
    catch(error){
      return error
    }
   

  }
}