import { Router } from 'express';
import { getFAQs } from '../controllers/faqs.controller';

const router = Router();

router.get('/faqs', getFAQs);

export default router;
