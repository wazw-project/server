/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const MarkerSchema = new mongoose.Schema({
    manager_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Managers', require: true },
    system_id: { type: mongoose.Schema.Types.ObjectId, ref: 'System', require: true },
    location:{ lat: { type: Number, require: true },
    lng: { type: Number, require: true }},  
    description: { type: String, require: true },
    name: { type: String, require: true },
    notes: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String, require: true },
});
export interface Marker {

    manager_id: mongoose.Schema.Types.ObjectId,
    system_id: mongoose.Schema.Types.ObjectId,
    location: {
        lat: number
        lng: number
    }
    description: string
    name: string
    notes: string
    email: string,
    phone: string,
}