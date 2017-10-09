import Workout from '../model';

export default function list(req, res, next) {
  Workout.find().exec((err, workouts) => {
    if (err) {
      next(err);
    } else {
      res.send(workouts);
    }
  });
}
