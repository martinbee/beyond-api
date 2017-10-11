const weekPercentages = [
  [65, 75, 85],
  [70, 80, 90],
  [75, 85, 95],
];

const getWeight = (value, percentage) => (value / 100) * percentage;

const getCoreLiftExercise = (trainingMax, week) => {
  const percentages = weekPercentages[week - 1];

  const coreLiftSets = percentages.map(percentage => ({
    weight: getWeight(trainingMax, percentage),
    reps: 0,
  }));

  return {
    type: 'coreLift',
    sets: coreLiftSets,
  };
};

const getWarmupExercise = (coreLiftSets, trainingMax) => {
  const tenPercentOfTrainingMax = getWeight(trainingMax, 10);
  const lowestCoreLift = coreLiftSets[0];

  const warmUpSetCount = 3;
  const warmUpSets = [];

  for (let i = 0; i < warmUpSetCount; i += 1) {
    const newLowestLift = warmUpSets[0] || lowestCoreLift;
    const warmUpSet = newLowestLift - tenPercentOfTrainingMax;

    warmUpSets.unshift(warmUpSet);
  }

  return {
    type: 'warmup',
    sets: warmUpSets,
  };
};

const getJokerExercise = (coreLiftSets) => {
  const highestCoreLift = coreLiftSets[coreLiftSets.length - 1];

  const jokerSetsCount = 2;
  const jokerSets = [];

  for (let i = 0; i < jokerSetsCount; i += 1) {
    const newHighestLift = jokerSets[jokerSets.length - 1] || highestCoreLift;
    const tenPercentOfHighestLift = getWeight(newHighestLift, 10);

    const jokerSet = newHighestLift + tenPercentOfHighestLift;

    jokerSets.push(jokerSet);
  }

  return {
    type: 'jokerSets',
    sets: jokerSets,
  };
};

export default function getExcercises(trainingMax, week) {
  const coreLiftExercise = getCoreLiftExercise(trainingMax, week);
  const coreLiftSets = coreLiftExercise.sets;

  const warmupExercise = getWarmupExercise(coreLiftSets, trainingMax);
  const jokerExercise = getJokerExercise(coreLiftSets);

  return [
    coreLiftExercise,
    warmupExercise,
    jokerExercise,
  ];
}
