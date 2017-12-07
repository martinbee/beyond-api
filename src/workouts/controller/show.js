import Workout from '../model';

import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

export default function show(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) return next(invalidIdError);


  return Workout.findById(id).exec((err, workout) => {
    if (err) return next(err);

    return res.send(workout || {});
  });
}
