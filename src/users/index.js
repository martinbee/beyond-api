import express from 'express';

import {
  getAll,
  get,
  update,
} from './controller';

const router = express.Router();

// /users
router.route('/')
  .get(getAll);

router.route('/:id')
  .get(get)
  .patch(update);

export default router;
