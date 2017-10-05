import express from 'express';

const router = express.Router();

// /workouts
router.route('/')
  .get((req, res) => res.send('workouts'));

export default router;
