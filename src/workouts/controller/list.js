import Workout from '../model';

export default function list(req, res, next) {
  Workout.find().exec((err, workouts) => {
    if (err) return next(err);

    return res.send(workouts);
  });
}
