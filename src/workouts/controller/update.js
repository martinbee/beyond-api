import Workout from '../model';

export default function update(req, res, next) {
  const { id } = req.params;
  const updates = req.body;

  Workout
    .findByIdAndUpdate(id, updates, { new: true })
    .exec((err, workout) => {
      if (err) {
        next(err);
      } else {
        res.send(workout);
      }
    });
}
