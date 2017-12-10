import Workout from '../model';

import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

// move checking id logic into a pre call
export default function show(req, res, next) {
  const { workoutId } = req.params;

  if (!isValidObjectId(workoutId)) return next(invalidIdError);

  return Workout
    .findById(workoutId)
    .exec((err, workout) => {
      if (err) return next(err);

      return res.send(workout || {});
    });
}
