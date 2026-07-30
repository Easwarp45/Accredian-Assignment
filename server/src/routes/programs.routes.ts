import { Router } from 'express';
import { getPrograms } from '../controllers/programs.controller';

const router = Router();

router.get('/programs', getPrograms);

export default router;
