import User from '../model';

import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

export default function show(req, res, next) {
  const { userId } = req.params;

  if (!isValidObjectId(userId)) return next(invalidIdError);

  return User.findById(userId).exec((err, user) => {
    if (err) return next(err);

    return res.send(user || {});
  });
}
