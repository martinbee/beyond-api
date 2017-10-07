import express from 'express';

import {
  getAll,
} from './controller';

const router = express.Router();

// /workouts
router.route('/')
  .get(getAll);

export default router;
