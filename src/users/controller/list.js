import User from '../model';

export default function list(req, res, next) {
  User.find().exec((err, users) => {
    if (err) return next(err);

    return res.send(users);
  });
}
