import express from 'express';
import workoutsRouter from '../workouts';

import {
  list,
  show,
  update,
} from './controller';

const router = express.Router();

// /users
router.route('/')
  .get(list);

router.route('/:userId')
  .get(show)
  .patch(update);

// Sets up /users/:userId/workouts
router.use('/:userId/workouts', workoutsRouter);

export default router;
