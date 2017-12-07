import User from '../model';

import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

export default function show(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) return next(invalidIdError);

  return User.findById(id).exec((err, user) => {
    if (err) return next(err);

    return res.send(user || {});
  });
}
