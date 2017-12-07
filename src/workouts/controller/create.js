import Workout from '../model';

// maybe change route to users/:userId/workouts/
// could use userId that way
// security needs to be implemented to ensure a user can only change their
// workouts
export default function create(req, res, next) {
  const newWorkout = req.body;

  Workout
    .create(newWorkout, (err, workout) => {
      if (err) return next(err);

      return res.send(workout);
    });
}
