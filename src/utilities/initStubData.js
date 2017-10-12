import stubUser from './stubData/user';
import stubWorkouts from './stubData/workouts';
import User from '../users/model';
import Workout from '../workouts/model';

export default async function initStubData() {
  const user = new User(stubUser);

  try {
    await user.save();

    stubWorkouts.forEach((stubWorkout) => {
      const workout = new Workout(stubWorkout);
      workout.user = user._id;

      workout.save();
    });
  } catch (err) {
    console.log(`Stub data init failed: ${err.message}`);
  }
}
