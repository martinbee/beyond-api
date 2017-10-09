import User from '../model';

export default function list(req, res, next) {
  User.find().exec((err, users) => {
    if (err) {
      next(err);
    } else {
      res.send(users);
    }
  });
}
