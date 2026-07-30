import mongoose, { Schema, Document } from 'mongoose';
import { IDemoRequest } from '../types';

export interface IDemoRequestDocument extends IDemoRequest, Document {}

const DemoRequestSchema = new Schema<IDemoRequestDocument>(
  {
    id: { type: String, required: true, unique: true },
    referenceId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    workEmail: { type: String, required: true },
    companyName: { type: String, required: true },
    designation: { type: String },
    phone: { type: String, required: true },
    organizationSize: { type: String },
    preferredDate: { type: String },
    preferredTime: { type: String },
    message: { type: String },
    createdAt: { type: String, required: true }
  },
  { timestamps: true }
);

export const DemoRequestModel = mongoose.models.DemoRequest || mongoose.model<IDemoRequestDocument>('DemoRequest', DemoRequestSchema);
