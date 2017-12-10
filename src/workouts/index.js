import express from 'express';

import {
  list,
  create,
  show,
  update,
} from './controller';

const router = express.Router({ mergeParams: true });

// /workouts
router.route('/')
  .get(list)
  .post(create);

router.route('/:workoutId')
  .get(show)
  .patch(update);

export default router;
