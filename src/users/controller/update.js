import User from '../model';

export default function update(req, res, next) {
  const { id } = req.params;
  const updates = req.body;

  User
    .findByIdAndUpdate(id, updates, { new: true })
    .exec((err, user) => {
      if (err) return next(err);

      return res.send(user);
    });
}
