import { Request, Response } from 'express';
import { sendSuccess } from '../utils/apiResponse';
import { getIsMongoConnected } from '../config/database';

export const getHealthStatus = (_req: Request, res: Response) => {
  const healthData = {
    status: 'ok',
    uptime: process.uptime(),
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    database: getIsMongoConnected() ? 'MongoDB Connected' : 'In-Memory Store Active'
  };

  sendSuccess(res, 'Health check passed', healthData);
};
