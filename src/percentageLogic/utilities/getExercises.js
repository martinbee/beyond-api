const warmupSetsCount = process.env.WARMUP_SETS_COUNT || 3;
const jokerSetsCount = process.env.JOKER_SETS_COUNT || 2;
const firstSetLastSetsCount = process.env.FIRST_SET_LAST_COUNT || 3;
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

const getWarmupExercise = (lowestCoreLiftWeight, trainingMax) => {
  const tenPercentOfTrainingMax = getWeight(trainingMax, 10);
  const warmupSets = [];

  for (let i = 0; i < warmupSetsCount; i += 1) {
    const lowestWarmupSetWeight = warmupSets.length && warmupSets[0].weight;
    const newLowestLift = lowestWarmupSetWeight || lowestCoreLiftWeight;

    const warmupSet = {
      weight: newLowestLift - tenPercentOfTrainingMax,
      reps: 0,
    };

    warmupSets.unshift(warmupSet);
  }

  return {
    type: 'warmup',
    sets: warmupSets,
  };
};

const getJokerExercise = (highestCoreLiftWeight) => {
  const jokerSets = [];

  for (let i = 0; i < jokerSetsCount; i += 1) {
    const highestJokerSetWeight = jokerSets.length && jokerSets[jokerSets.length - 1].weight;
    const newHighestLift = highestJokerSetWeight || highestCoreLiftWeight;

    const tenPercentOfHighestLift = getWeight(newHighestLift, 10);

    const jokerSet = {
      weight: newHighestLift + tenPercentOfHighestLift,
      reps: 0,
    };

    jokerSets.push(jokerSet);
  }

  return {
    type: 'jokerSets',
    sets: jokerSets,
  };
};

const getFirstSetLastExercise = (lowestCoreLiftWeight) => {
  const firstSetLastSets = [];

  for (let i = 0; i < firstSetLastSetsCount; i += 1) {
    const firstSetLastSet = {
      weight: lowestCoreLiftWeight,
      reps: 0,
    };

    firstSetLastSets.push(firstSetLastSet);
  }

  return {
    type: 'firstSetLast',
    sets: firstSetLastSets,
  };
};

export default function getExcercises(trainingMax, week) {
  const coreLiftExercise = getCoreLiftExercise(trainingMax, week);
  const coreLiftSets = coreLiftExercise.sets;

  const lowestCoreLiftWeight = coreLiftSets[0].weight;
  const highestCoreLiftWeight = coreLiftSets[coreLiftSets.length - 1].weight;

  const warmupExercise = getWarmupExercise(lowestCoreLiftWeight, trainingMax);
  const jokerExercise = getJokerExercise(highestCoreLiftWeight);
  const firstSetLastExercise = getFirstSetLastExercise(lowestCoreLiftWeight);

  return [
    coreLiftExercise,
    warmupExercise,
    jokerExercise,
    firstSetLastExercise,
  ];
}
