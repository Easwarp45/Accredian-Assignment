import { Request, Response, NextFunction } from 'express';
import { sendError } from '../utils/apiResponse';
import { logger } from '../utils/logger';

export const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  logger.error('Unhandled API Error:', err.message || err);

  // If headers have already been sent to the client, delegate to the default Express error handler
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  sendError(
    res,
    message,
    statusCode,
    process.env.NODE_ENV === 'development' ? { stack: err.stack } : undefined
  );
};
