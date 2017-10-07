import express from 'express';

import {
  getAll,
  get,
} from './controller';

const router = express.Router();

// /workouts
router.route('/')
  .get(getAll);

router.route('/:id')
  .get(get);

export default router;
