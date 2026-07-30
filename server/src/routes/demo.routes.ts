import { Router } from 'express';
import { handleDemoRequestSubmit, getDemoRequests } from '../controllers/demo.controller';
import { validateRequest } from '../middlewares/validate.middleware';
import { demoRequestSchema } from '../validators/demo.validator';
import { formRateLimiter } from '../middlewares/rateLimiter.middleware';

const router = Router();

router.post('/demo-request', formRateLimiter, validateRequest(demoRequestSchema), handleDemoRequestSubmit);
router.get('/demo-request', getDemoRequests);

export default router;
