import Workout from '../model';

import {
  isValidObjectId,
} from '../../utilities';

const invalidIdError = 'Invalid id passed. Must be valid mongo object id.';

export default function show(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) return next(new Error(invalidIdError));

  return Workout.findById(id).exec((err, workout) => {
    if (err) return next(err);

    return res.send(workout || {});
  });
}
