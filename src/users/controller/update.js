import User from '../model';

export default async function update(req, res, next) {
  const { id } = req.params;
  const updates = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });

    res.send(user || {});
  } catch (err) {
    next(err);
  }
}
