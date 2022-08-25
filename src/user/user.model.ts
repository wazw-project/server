/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fireBaseUid:{ type: String,require:true},
    firstName: { type: String, require:true },
    lastName: { type: String, require:true },
    phone: { type: String },
    email: { type: String }
});


export interface User {
    fireBaseUid:string  
    firstName: string
    lastName: string
    phone: string
    email: string
 }
