import Workout from '../../workouts/model';
import stubWorkouts from './stubData/workouts';

export default async function insertStubWorkouts(stubUser) {
  stubWorkouts.forEach((stubWorkout) => {
    const workout = new Workout(stubWorkout);
    workout.user = stubUser._id;

    try {
      return workout.save();
    } catch (err) {
      throw new Error(err.message);
    }
  });
}
