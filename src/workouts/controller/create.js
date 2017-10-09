// handle errors
// handle first workout condition
// add workout calculations
// create new workout
import mongoose from 'mongoose';

import Workout from '../model';
import {
  getNextLiftType,
  isEndOfMesocycle,
  updateUserTrainingMax,
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

  // can't sort using findOne, have to grab all, limit, then use cursor
  // add try catch or error handler here
  const lastWorkoutCursor = await Workout.find(lastWorkoutQuery, lastWorkoutFields)
    .sort(lastWorkoutSort)
    .limit(1)
    .populate('user', 'trainingMax');

  const lastWorkout = lastWorkoutCursor[0];

  // what if first week of workout?!
  const { week, liftType, user } = lastWorkout;

  const trainingMax = (
    isEndOfMesocycle(week, liftType) ? updateUserTrainingMax() : user.trainingMax
  );

  const nextLiftType = getNextLiftType(liftType);
  const liftTrainingMax = trainingMax[nextLiftType];

  // calculate new workouts percentages
  // function call

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
