import Workout from '../model';

export default async function update(req, res, next) {
  const { id } = req.params;
  const updates = req.body;

  try {
    const workout = await Workout.findByIdAndUpdate(id, updates, { new: true });

    res.send(workout || {});
  } catch (err) {
    next(err);
  }
}
