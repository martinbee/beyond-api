import express from 'express';

const router = express.Router();

// /users
router.route('/')
  .get((req, res) => res.send('users'));

export default router;
