import { FeatureModel } from '../models/Feature';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IFeature } from '../types';
import { logger } from '../utils/logger';

export class FeaturesService {
  async getAllFeatures(): Promise<IFeature[]> {
    if (getIsMongoConnected()) {
      try {
        const docs = await FeatureModel.find().lean();
        return docs as unknown as IFeature[];
      } catch (error: any) {
        logger.error(`Failed to retrieve features from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getFeatures();
  }
}

export const featuresService = new FeaturesService();
