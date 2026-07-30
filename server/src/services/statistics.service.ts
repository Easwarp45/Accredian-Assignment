import { StatisticModel } from '../models/Statistic';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IStatistic } from '../types';
import { logger } from '../utils/logger';

export class StatisticsService {
  async getStatistics(): Promise<IStatistic[]> {
    if (getIsMongoConnected()) {
      try {
        const docs = await StatisticModel.find().lean();
        return docs as unknown as IStatistic[];
      } catch (error: any) {
        logger.error(`Failed to retrieve statistics from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getStatistics();
  }
}

export const statisticsService = new StatisticsService();
