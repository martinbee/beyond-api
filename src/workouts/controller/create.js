// refactor put all code here first and then think about extraction
// handle errors
// handle first workout condition
// add workout calculations
// create new workout
import mongoose from 'mongoose';

import Workout from '../model';
import liftOrder from '../data/liftOrder';
import {
  updateUserTrainingMax,
} from '../utilities';


const isEndOfMesocycle = (week, liftType) => {
  const isLastWeekOfCycle = week === 3;
  const isLastLiftOfCycle = liftOrder.indexOf(liftType) === liftOrder.length - 1;

  return isLastWeekOfCycle && isLastLiftOfCycle;
};

const getNextLiftType = (lastLiftType) => {
  const lastLiftTypeIndex = liftOrder.indexOf(lastLiftType);
  const restartOrder = lastLiftTypeIndex === liftOrder.length - 1;


  const nextLiftType = liftOrder[lastLiftTypeIndex + 1];

  return nextLiftType;
};

const createFirstWorkout = (userId, req, res, next) => {
  res.send(`${userId} wants to create their first workout`);
};

const addNewWorkout = (lastWorkoutCursor, req, res, next) => {
  const lastWorkout = lastWorkoutCursor[0];

  const { week, liftType, user } = lastWorkout;

  const trainingMax = (
    isEndOfMesocycle(week, liftType) ? updateUserTrainingMax() : user.trainingMax
  );

  const nextLiftType = getNextLiftType(liftType);
  const liftTrainingMax = trainingMax[nextLiftType];

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
};

export default function create(req, res, next) {
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

  // refactor express args into spread args? pull callback out below?

  // can't sort using findOne, have to grab all, limit, then use cursor
  // add try catch or error handler here
  Workout.find(lastWorkoutQuery, lastWorkoutFields)
    .sort(lastWorkoutSort)
    .limit(1)
    .populate('user', 'trainingMax')
    .exec((err, lastWorkoutCursor) => {
      const isFirstWorkout = !lastWorkoutCursor.length;

      if (isFirstWorkout) {
        createFirstWorkout(userId, req, res, next);
      } else {
        addNewWorkout(lastWorkoutCursor, req, res, next);
      }
    });
}
