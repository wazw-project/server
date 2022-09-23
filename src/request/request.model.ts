/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export enum Status {
    SENT, PENDING, APPROVE, REJECT
}
export const RequestSchema = new mongoose.Schema({
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String },
    phone: { type: String },
    system_id: { type: mongoose.Schema.Types.ObjectId, ref: 'System', require: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'System', require: true },
    display_name: { type: String, require: true },
    status: { type: String,enum:Status,default:Status.SENT, require: true },
    notes: { type: String, require: true },
    location:{ lat: { type: Number, require: true },
    lng: { type: Number, require: true }}
});

export interface Request {

    firstName: string
    lastName: string
    email: string
    phone: string
    system_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,
    display_name: string
    status: Status,
    notes: string,
    location: {
        lat: number
        lng: number
    }
}