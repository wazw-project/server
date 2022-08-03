import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    phone: { type: String },
    age: { type: Number },
    name: { type: String },
});
export interface User {
    phone: string;
    age: number;
    name: string;
}