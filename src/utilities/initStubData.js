import stubUser from './stubData/user';
import stubWorkouts from './stubData/workouts';
import User from '../users/model';
import Workout from '../workouts/model';

// normally throwing errors is not a great idea, this function is only called in
// development to stub some users, so I deem it acceptable!
export default function initStubData() {
  const user = new User(stubUser);

  user.save((err) => {
    if (err) throw new Error(err.message);

    stubWorkouts.forEach((stubWorkout) => {
      const workout = new Workout(stubWorkout);
      workout.user = user._id;

      workout.save((error) => {
        if (error) throw new Error(error.message);
      });
    });
  });
}
