import { ProgramModel } from '../models/Program';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IProgram } from '../types';
import { logger } from '../utils/logger';

export class ProgramsService {
  async getPrograms(category?: string): Promise<IProgram[]> {
    if (getIsMongoConnected()) {
      try {
        const filter: Record<string, any> = {};
        if (category && typeof category === 'string' && category !== 'all') {
          filter.category = String(category);
        }
        const docs = await ProgramModel.find(filter as any).lean();
        return docs as unknown as IProgram[];
      } catch (error: any) {
        logger.error(`Failed to retrieve programs from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getPrograms(typeof category === 'string' ? category : undefined);
  }
}

export const programsService = new ProgramsService();
