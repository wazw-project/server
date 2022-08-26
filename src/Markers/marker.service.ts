/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Marker } from './marker.model';
import * as mongoose from 'mongoose';
@Injectable()
export class MakerService {

  constructor(@InjectModel('Marker') private readonly markerModel: Model<Marker>) { }

  async addMarker(
    manager_id: mongoose.Schema.Types.ObjectId,
    system_id: mongoose.Schema.Types.ObjectId,
    location:{lat: number,
    lng: number},
    description: string,
    name: string,
    notes: string,
    email: string,
    phone: string) {
    try {
      const newMarker = new this.markerModel({ manager_id, system_id,location, description, name, notes, email, phone });
      const result = await newMarker.save();
      console.log(result);
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getMarker(id) {
    try {
      const result = await this.markerModel.findById(id).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }
  async getMarkersBySystemId(id) {
    try {
      const result = await this.markerModel.find({ "system_id": id }).exec();
      return result;
    }
    catch (err) {
      console.log(err)
    }
  }

  async delete(id: string) {
    try {
      const deletedMarker = await this.markerModel
        .findByIdAndRemove({ _id: id })
        .exec();
      return deletedMarker;
    } catch (error) {
      return error
    }

  }
  async updateMarker(
    system_id: string,
    location: {
      lat: number,
      lng: number
    },
    description: string,
    name: string,
    notes: string,
    email: string,
    phone: string) {
    try {
      const updateSystem = await this.markerModel.findById(system_id)
    
       if (location.lat) { updateSystem.location.lat = location.lat }
      if (location.lng) { updateSystem.location.lng = location.lng }
      if (description) { updateSystem.description = description }
      if (email) { updateSystem.email = email }
      if (phone) { updateSystem.phone = phone }
      if (name) { updateSystem.name = name }
      if (notes) { updateSystem.notes = notes }
      updateSystem.save();
    }
    catch (error) {
      return error
    }


  }
}
