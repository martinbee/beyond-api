import mongoose from 'mongoose';

import Workout from '../model';

export default function list(req, res, next) {
  const { userId } = req.params;

  const findUserWorkoutsQuery = {
    user: mongoose.Types.ObjectId(userId),
  };

  Workout
    .find(findUserWorkoutsQuery)
    .sort({ createdAt: -1 })
    .exec((err, workouts) => {
      if (err) return next(err);

      return res.send(workouts);
    });
}
