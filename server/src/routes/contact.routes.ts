import { Router } from 'express';
import { handleContactSubmit, getContactSubmissions } from '../controllers/contact.controller';
import { validateRequest } from '../middlewares/validate.middleware';
import { contactSchema } from '../validators/contact.validator';
import { formRateLimiter } from '../middlewares/rateLimiter.middleware';

const router = Router();

router.post('/contact', formRateLimiter, validateRequest(contactSchema), handleContactSubmit);
router.get('/contact', getContactSubmissions);

export default router;
