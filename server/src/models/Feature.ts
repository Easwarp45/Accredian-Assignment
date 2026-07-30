import mongoose, { Schema, Document } from 'mongoose';
import { IFeature } from '../types';

export interface IFeatureDocument extends IFeature, Document {}

const FeatureSchema = new Schema<IFeatureDocument>(
  {
    id: { type: String, required: true, unique: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ['admin', 'employee', 'leadership'], required: true },
    badge: { type: String },
    linkText: { type: String }
  },
  { timestamps: true }
);

export const FeatureModel = mongoose.models.Feature || mongoose.model<IFeatureDocument>('Feature', FeatureSchema);
