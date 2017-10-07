import User from '../model';

export default function get(req, res, next) {
  const { id } = req.params;

  User.findById(id).exec((err, user) => {
    if (err) {
      next(err);
    } else {
      res.send(user);
    }
  });
}
