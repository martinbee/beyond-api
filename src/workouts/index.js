import express from 'express';

import {
  getAll,
  create,
  get,
  update,
} from './controller';

const router = express.Router();

// /workouts
router.route('/')
  .get(getAll);

router.route('/:id')
  .get(get)
  .patch(update);

router.route('/:userId')
  .post(create);

export default router;
