/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const SystemSchema = new mongoose.Schema({
 
	topic:{type:String},
	objectName:{type:String},
	managerUid:{type:String},
    description:{type:String},
	communication :{type:String},

});
export interface System {
   topic:string,
   objectName:string,
   managerUid:string,
   description:string,
   communication:string
}