import User from '../model';

import {
  isValidObjectId,
} from '../../utilities';
import {
  invalidIdError,
} from '../../utilities/errors';

export default function update(req, res, next) {
  const { userId } = req.params;
  const updates = req.body;

  if (!isValidObjectId(userId)) return next(invalidIdError);

  return User
    .findByIdAndUpdate(userId, updates, { new: true })
    .exec((err, user) => {
      if (err) return next(err);

      return res.send(user);
    });
}
