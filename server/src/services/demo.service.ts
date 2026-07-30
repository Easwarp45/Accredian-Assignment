import { DemoRequestModel } from '../models/DemoRequest';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { DemoRequestInput } from '../validators/demo.validator';
import { IDemoRequest } from '../types';
import { logger } from '../utils/logger';

export class DemoService {
  async createDemoRequest(input: DemoRequestInput): Promise<IDemoRequest> {
    const createdAt = new Date().toISOString();
    const id = `DEMO-${Date.now()}`;
    const refNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `ACC-DEMO-${refNum}`;

    if (getIsMongoConnected()) {
      try {
        const doc = await DemoRequestModel.create({
          ...input,
          id,
          referenceId,
          createdAt
        });
        return doc.toObject() as IDemoRequest;
      } catch (error: any) {
        logger.error(`Failed to save demo request to MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }

    return store.addDemoRequest(input);
  }

  async getAllDemoRequests(): Promise<IDemoRequest[]> {
    if (getIsMongoConnected()) {
      try {
        const docs = await DemoRequestModel.find().sort({ createdAt: -1 }).lean();
        return docs as unknown as IDemoRequest[];
      } catch (error: any) {
        logger.error(`Failed to retrieve demo requests from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getDemoRequests();
  }
}

export const demoService = new DemoService();
