import Workout from '../model';

import {
  isValidObjectId,
} from '../../utilities';


export default function get(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(new Error('Invalid id passed. Must be valid mongo object id.'));
  } else {
    Workout.findById(id).exec((err, workout) => {
      if (err) {
        next(err);
      } else {
        res.send(workout);
      }
    });
  }
}
