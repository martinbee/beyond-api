import Workout from '../model';

import {
  isValidObjectId,
} from '../../utilities';

const invalidIdError = (
  new Error('Invalid id passed. Must be valid mongo object id.')
);

export default async function show(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) return next(invalidIdError);

  try {
    const workout = await Workout.findById(id);

    return res.send(workout || {});
  } catch (err) {
    return next(err);
  }
}
