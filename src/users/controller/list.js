import User from '../model';

export default async function list(req, res, next) {
  try {
    const users = await User.find();

    res.send(users);
  } catch (err) {
    next(err);
  }
}
