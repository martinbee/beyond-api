import Workout from '../model';
import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

export default function update(req, res, next) {
  const { workoutId } = req.params;
  const updates = req.body;

  if (!isValidObjectId(workoutId)) return next(invalidIdError);

  return Workout
    .findByIdAndUpdate(workoutId, updates, { new: true })
    .exec((err, workout) => {
      if (err) return next(err);

      return res.send(workout);
    });
}
