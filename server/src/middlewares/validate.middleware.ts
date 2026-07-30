import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { sendError } from '../utils/apiResponse';

export const validateRequest = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const issues = error.issues || (error as any).errors || [];
        const formattedErrors = issues.map((err: any) => ({
          field: err.path ? err.path.join('.') : 'body',
          message: err.message
        }));
        sendError(res, 'Validation failed for request body', 400, formattedErrors);
        return;
      }
      sendError(res, 'Invalid request data', 400);
    }
  };
};
