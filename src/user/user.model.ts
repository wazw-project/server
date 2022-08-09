/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export enum Role {
 MAINADMIN,
    ADMIN,
    USER,
    OWNER   
}
export const UserSchema = new mongoose.Schema({
    // role: { type: Role, require: true },
    role: { type: String, enum: Role, default: Role.USER,require: true },
    firstName: { type: String, require },
    lastName: { type: String, require },
    phone: { type: String },
    email: { type: String }
});
export interface User {
    role: Role
    firstName: string
    lastName: string
    phone: string
    email: string
 }
