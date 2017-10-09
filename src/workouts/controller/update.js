import Workout from '../model';

export default function update(req, res, next) {
  const { id } = req.params;
  const updates = req.body;

  Workout
    .findByIdAndUpdate(id, updates, { new: true })
    .exec((err, workout) => {
      if (err) return next(err);

      return res.send(workout);
    });
}
