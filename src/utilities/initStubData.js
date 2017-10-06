import stubUser from './stubData/user';
import stubWorkouts from './stubData/workouts';
import User from '../users/model';
import Workout from '../workouts/model';

export default function initStubData() {
  const user = new User(stubUser);

  user.save((err) => {
    if (err) throw new Error(err.message);

    stubWorkouts.forEach((stubWorkout) => {
      const workout = new Workout(stubWorkout);
      workout.userId = user._id;

      workout.save((error) => {
        if (error) throw new Error(error.message);
      });
    });
  });
}
