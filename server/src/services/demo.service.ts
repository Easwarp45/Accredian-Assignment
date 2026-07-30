import { DemoRequestModel } from '../models/DemoRequest';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { DemoRequestInput } from '../validators/demo.validator';
import { IDemoRequest } from '../types';

export class DemoService {
  async createDemoRequest(input: DemoRequestInput): Promise<IDemoRequest> {
    const createdAt = new Date().toISOString();
    const id = `DEMO-${Date.now()}`;
    const refNum = Math.floor(100000 + Math.random() * 900000);
    const referenceId = `ACC-DEMO-${refNum}`;

    if (getIsMongoConnected()) {
      const doc = await DemoRequestModel.create({
        ...input,
        id,
        referenceId,
        createdAt
      });
      return doc.toObject() as IDemoRequest;
    }

    return store.addDemoRequest(input);
  }

  async getAllDemoRequests(): Promise<IDemoRequest[]> {
    if (getIsMongoConnected()) {
      const docs = await DemoRequestModel.find().sort({ createdAt: -1 }).lean();
      return docs as unknown as IDemoRequest[];
    }
    return store.getDemoRequests();
  }
}

export const demoService = new DemoService();
