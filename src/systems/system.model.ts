/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const SystemSchema = new mongoose.Schema({
	topic:{type:String,require:true},
	objectName:{type:String,require:true},
    managerUid:{type: mongoose.Schema.Types.ObjectId, ref: 'User',require:true} ,
    description:{type:String,require:true},  
	email :{type:String,require:true},
    phone :{type:String,require:true},
    urlName:{type:String,unique:true,require:true},
    urlImage:{type:String,require:true}
});
export interface System {
   topic:string,
   objectName:string,
    managerUid: mongoose.Schema.Types.ObjectId,
   description:string,
   email:string,
   phone:string,
   urlName:string,
   urlImage:string
}