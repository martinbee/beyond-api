import Workout from '../model';

import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

// move checking id logic into a pre call
export default function show(req, res, next) {
  const { userId, workoutId } = req.params;

  const hasValidIds = isValidObjectId(userId) && isValidObjectId(workoutId);

  if (!hasValidIds) return next(invalidIdError);

  const query = {
    _id: workoutId,
    user: userId,
  };

  return Workout
    .findOne(query)
    .exec((err, workout) => {
      if (err) return next(err);

      return res.send(workout || {});
    });
}
