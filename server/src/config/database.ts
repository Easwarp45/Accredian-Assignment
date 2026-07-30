import mongoose from 'mongoose';
import { config } from './env';
import { logger } from '../utils/logger';
import { seedDatabase } from '../database/seed';

let isMongoConnected = false;

// Dynamic connection listeners to track connection health in real-time
mongoose.connection.on('connected', () => {
  isMongoConnected = true;
  logger.info('MongoDB connection established successfully.');
});

mongoose.connection.on('error', (err) => {
  isMongoConnected = false;
  logger.error(`MongoDB connection error: ${err.message || err}`);
});

mongoose.connection.on('disconnected', () => {
  isMongoConnected = false;
  logger.warn('MongoDB connection disconnected. Seamless fallback to in-memory store.');
});

export async function connectDatabase(): Promise<boolean> {
  if (mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2) {
    return isMongoConnected;
  }

  if (!config.mongoUri) {
    logger.info('MONGODB_URI not provided. Utilizing high-performance persistent in-memory data layer.');
    return false;
  }

  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(config.mongoUri, {
      serverSelectionTimeoutMS: 5000 // Shorter timeout for quicker startup validation
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

