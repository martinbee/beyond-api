import User from '../model';

import {
  isValidObjectId,
} from '../../utilities';

const invalidIdError = 'Invalid id passed. Must be valid mongo object id.';

export default function show(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) return next(new Error(invalidIdError));

  return User.findById(id).exec((err, user) => {
    if (err) return next(err);

    return res.send(user || {});
  });
}
