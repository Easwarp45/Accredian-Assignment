import mongoose, { Schema, Document } from 'mongoose';
import { IStatistic } from '../types';

export interface IStatisticDocument extends IStatistic, Document {}

const StatisticSchema = new Schema<IStatisticDocument>(
  {
    id: { type: String, required: true, unique: true },
    value: { type: Number, required: true },
    suffix: { type: String, required: true },
    prefix: { type: String },
    label: { type: String, required: true },
    description: { type: String, required: true },
    changeBadge: { type: String }
  },
  { timestamps: true }
);

export const StatisticModel = mongoose.models.Statistic || mongoose.model<IStatisticDocument>('Statistic', StatisticSchema);
