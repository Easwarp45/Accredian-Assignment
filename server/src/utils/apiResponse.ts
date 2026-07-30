import { Response } from 'express';
import { APIResponse } from '../types';

export function sendSuccess<T>(
  res: Response,
  message: string,
  data?: T,
  statusCode = 200,
  meta?: Record<string, any>
): Response {
  const response: APIResponse<T> = {
    success: true,
    message,
    data,
    meta
  };
  return res.status(statusCode).json(response);
}

export function sendError(
  res: Response,
  message: string,
  statusCode = 400,
  errors?: any
): Response {
  const response: APIResponse = {
    success: false,
    message,
    errors
  };
  return res.status(statusCode).json(response);
}
