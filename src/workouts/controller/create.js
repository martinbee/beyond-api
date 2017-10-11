import mongoose from 'mongoose';

import Workout from '../model';
import liftOrder from '../data/liftOrder';
import {
  updateUserTrainingMax,
  getExercises,
} from '../utilities';

const createFirstWorkout = (userId, { req, res, next }) => {
  res.send(`${userId} wants to create their first workout`);
};

const getNextLiftType = (lastLiftType) => {
  const lastLiftTypeIndex = liftOrder.indexOf(lastLiftType);
  const restartOrder = lastLiftTypeIndex === liftOrder.length - 1;

  if (restartOrder) return liftOrder[0];

  const nextLiftType = liftOrder[lastLiftTypeIndex + 1];

  return nextLiftType;
};

const isEndOfMesocycle = (week, liftType) => {
  const isLastWeekOfCycle = week === 3;
  const isLastLiftOfCycle = liftOrder.indexOf(liftType) === liftOrder.length - 1;

  return isLastWeekOfCycle && isLastLiftOfCycle;
};

const addNewWorkout = (lastWorkoutCursor, { res, next }) => {
  const lastWorkout = lastWorkoutCursor[0];
  const { week, liftType, user } = lastWorkout;

  // updateUserTrainingMax weird pattern?
  const trainingMax = (
    isEndOfMesocycle(week, liftType) ? updateUserTrainingMax() : user.trainingMax
  );
  // update week to 1 if end of mesocycle

  const nextLiftType = getNextLiftType(liftType);
  const liftTrainingMax = trainingMax[nextLiftType];
  const exercises = getExercises(liftTrainingMax, week);

  const newWorkoutProps = {
    user,
    liftType: nextLiftType,
    week: week + 1,
    exercises,
  };

  res.send(newWorkoutProps);
  //Workout.create(object)
    //.exec((err, workout) => {
      //if (err) return next(err);

      //return res.send(workout);
    //});
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
  Workout.find(lastWorkoutQuery, lastWorkoutFields)
    .sort(lastWorkoutSort)
    .limit(1)
    .populate('user', 'trainingMax')
    .exec((err, lastWorkoutCursor) => {
      if (err) return next(err);

      const expressArgs = { req, res, next };
      const noWorkouts = !lastWorkoutCursor.length;

      if (noWorkouts) return createFirstWorkout(userId, expressArgs);

      return addNewWorkout(lastWorkoutCursor, expressArgs);
    });
}
