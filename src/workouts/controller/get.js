import Workout from '../model';

export default function get(req, res, next) {
  const { id } = req.params;

  Workout.findById(id).exec((err, workout) => {
    if (err) {
      next(err);
    } else {
      res.send(workout);
    }
  });
}
