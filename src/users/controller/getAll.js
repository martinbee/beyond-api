import User from '../model';

export default function getAll(req, res, next) {
  User.find().exec((err, users) => {
    if (err) {
      next(err);
    } else {
      res.send(users);
    }
  });
}
