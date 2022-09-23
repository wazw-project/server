/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export enum Role {
    MANAGER, ADMIN
}
export const ManagerSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
    system_id: { type: mongoose.Schema.Types.ObjectId, ref: 'System', require: true },
    active: { type: Boolean, require: true },
    display_name:{ type: String, require: true },
    role: { type: String, enum: Role, default: Role.MANAGER, require: true },
    invitation_sent: { type: String, require: true },
});

export interface Managers {
    user_id: mongoose.Schema.Types.ObjectId,
    system_id: mongoose.Schema.Types.ObjectId,
    active: boolean
    display_name: string
    role: Role
    invitation_sent: string
}