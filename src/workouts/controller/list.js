import Workout from '../model';

export default async function list(req, res, next) {
  try {
    const workouts = await Workout.find();

    res.send(workouts);
  } catch (err) {
    next(err);
  }
}
