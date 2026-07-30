import { ProgramModel } from '../models/Program';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IProgram } from '../types';

export class ProgramsService {
  async getPrograms(category?: string): Promise<IProgram[]> {
    if (getIsMongoConnected()) {
      const filter: Record<string, any> = {};
      if (category && category !== 'all') {
        filter.category = category;
      }
      const docs = await ProgramModel.find(filter as any).lean();
      return docs as unknown as IProgram[];
    }
    return store.getPrograms(category);
  }
}

export const programsService = new ProgramsService();
