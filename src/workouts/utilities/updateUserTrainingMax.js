import User from '../../users/model';
// refactor to be method on user
const legLifts = ['deadLift', 'squat'];

export default function updateUserTrainingMax(userId, trainingMax, next) {
  const mongoPropFreeTrainingMax = trainingMax.toJSON();
  const updatedTrainingMax = Object
    .keys(mongoPropFreeTrainingMax)
    .reduce((acc, key) => {
      const value = trainingMax[key];
      const isLiftALegLift = legLifts.includes(key);

      const weightToIncrease = isLiftALegLift ? 10 : 5;
      acc[key] = value + weightToIncrease;

      return acc;
    }, {});

  // needs to actually catch err
  User
    .findByIdAndUpdate(userId, { trainingMax: updatedTrainingMax })
    .exec((err) => { if (err) next(err); });

  return updatedTrainingMax;
}
