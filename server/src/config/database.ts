import mongoose from 'mongoose';
import { config } from './env';
import { logger } from '../utils/logger';
import { seedDatabase } from '../database/seed';

let isMongoConnected = false;

export async function connectDatabase(): Promise<boolean> {
  if (!config.mongoUri) {
    logger.info('MONGODB_URI not provided. Utilizing high-performance persistent in-memory data layer.');
    return false;
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 8000
    });
    isMongoConnected = true;
    logger.info('Successfully connected to MongoDB database!');
    await seedDatabase();
    return true;
  } catch (error: any) {
    logger.warn(`MongoDB connection skipped or unavailable (${error.message || error}). Falling back to in-memory store seamlessly.`);
    isMongoConnected = false;
    return false;
  }
}

export function getIsMongoConnected(): boolean {
  return isMongoConnected;
}
