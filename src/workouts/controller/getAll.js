import Workout from '../model';

export default function getAll(req, res, next) {
  Workout.find().exec((err, workouts) => {
    if (err) {
      next(err);
    } else {
      res.send(workouts);
    }
  });
}
