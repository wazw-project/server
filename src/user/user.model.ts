/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export enum Role {
    MAINADMIN,
    ADMIN,
    USER,
    OWNER   
}
export const UserSchema = new mongoose.Schema({
    fireBaseUid:{ type: String,require:true},
    role: { type: String, enum: Role, default: Role.USER,require: true },
    firstName: { type: String, require:true },
    lastName: { type: String, require:true },
    phone: { type: String },
    email: { type: String }
});
export interface User {
    fireBaseUid:string
    role: Role
    firstName: string
    lastName: string
    phone: string
    email: string
 }
