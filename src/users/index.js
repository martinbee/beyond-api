import express from 'express';

import {
  list,
  show,
  update,
} from './controller';

const router = express.Router();

// /users
router.route('/')
  .get(list);

router.route('/:id')
  .get(show)
  .patch(update);

export default router;
