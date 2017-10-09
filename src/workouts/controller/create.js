import mongoose from 'mongoose';

import Workout from '../model';
import {
  getNextLiftType,
} from '../utilities';

export default async function create(req, res, next) {
  const { userId } = req.body;
  const userObjectId = mongoose.Types.ObjectId(userId);

  const lastWorkoutQuery = {
    user: userObjectId,
  };
  const lastWorkoutFields = {
    liftType: 1,
    week: 1,
  };
  const lastWorkoutSort = {
    createdAt: -1,
  };

  // rethink to get one not an array!
  const lastWorkout = await Workout.find(lastWorkoutQuery, lastWorkoutFields)
    .sort(lastWorkoutSort)
    .limit(1)
    .populate('user');

  const { week, liftType, user } = lastWorkout[0];

  console.log(liftType);
  const nextLiftType = getNextLiftType(liftType);
  console.log(nextLiftType);
  // check week and lift for TM bump (if required update user)
  // using lift order constant, if last workout in order and week 3, update

  // get next lift
  // get related tm
  // calculate new workouts percentages
  // create new workout and return to client

  //const newWorkout = new Workout(req.body);

  //newWorkout
    //.save()
    //.exec((err, workout) => {
      //if (err) {
        //next(err);
      //} else {
        //res.send(workout);
      //}
    //});
  res.send('new workout');
}
