import User from '../model';

import {
  isValidObjectId,
} from '../../utilities';


export default function get(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(new Error('Invalid id passed. Must be valid mongo object id.'));
  } else {
    User.findById(id).exec((err, user) => {
      if (err) {
        next(err);
      } else {
        res.send(user);
      }
    });
  }
}
