import { StatisticModel } from '../models/Statistic';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IStatistic } from '../types';

export class StatisticsService {
  async getStatistics(): Promise<IStatistic[]> {
    if (getIsMongoConnected()) {
      const docs = await StatisticModel.find().lean();
      return docs as unknown as IStatistic[];
    }
    return store.getStatistics();
  }
}

export const statisticsService = new StatisticsService();
