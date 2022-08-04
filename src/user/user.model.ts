/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    phone: { type: String },
    age: { type: Number },
    name: { type: String ,required: true},
});
export interface User {
    phone: string;
    age: number;
    name: string;
}