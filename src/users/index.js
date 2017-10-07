import express from 'express';

import {
  getAll,
} from './controller';

const router = express.Router();

// /users
router.route('/')
  .get(getAll);

export default router;
