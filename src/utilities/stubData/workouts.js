const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export default [
  {
    liftType: 'press',
    trainingMax: 100,
    week: 1,
    mobilityWork: true,
    createdAt: yesterday.toISOString(),
    exercises: [
      {
        type: 'warmup',
        sets: [
          {
            weight: 50,
            reps: 5,
          },
          {
            weight: 60,
            reps: 5,
          },
          {
            weight: 70,
            reps: 3,
          },
        ],
      },
      {
        type: 'coreLift',
        sets: [
          {
            weight: 60,
            reps: 5,
          },
          {
            weight: 80,
            reps: 5,
          },
          {
            weight: 90,
            reps: 3,
          },
        ],
      },
      {
        type: 'jokerSets',
        sets: [
          {
            weight: 100,
            reps: 2,
          },
          {
            weight: 105,
            reps: 1,
          },
          {
            weight: 110,
            reps: 1,
          },
        ],
      },
      {
        type: 'firstSetLast',
        sets: [
          {
            weight: 60,
            reps: 3,
          },
          {
            weight: 60,
            reps: 3,
          },
          {
            weight: 60,
            reps: 3,
          },
          {
            weight: 60,
            reps: 3,
          },
          {
            weight: 60,
            reps: 3,
          },
        ],
      },
      {
        type: 'accessory',
        subType: 'pull-ups',
        sets: [
          {
            weight: 0,
            reps: 5,
          },
          {
            weight: 0,
            reps: 5,
          },
          {
            weight: 0,
            reps: 5,
          },
        ],
      },
      {
        type: 'accessory',
        subType: 'incline press',
        sets: [
          {
            weight: 45,
            reps: 8,
          },
          {
            weight: 50,
            reps: 6,
          },
          {
            weight: 50,
            reps: 6,
          },
        ],
      },
      {
        type: 'cardio',
        subType: 'prowler',
        notes: '95, 135, 185, 225',
      },
    ],
  },
  {
    liftType: 'deadLift',
    trainingMax: 225,
    week: 1,
    mobilityWork: true,
    createdAt: today.toISOString(),
    exercises: [
      {
        type: 'warmup',
        sets: [
          {
            weight: 135,
            reps: 3,
          },
          {
            weight: 150,
            reps: 3,
          },
          {
            weight: 160,
            reps: 3,
          },
        ],
      },
      {
        type: 'coreLift',
        sets: [
          {
            weight: 180,
            reps: 5,
          },
          {
            weight: 200,
            reps: 5,
          },
          {
            weight: 220,
            reps: 5,
          },
        ],
      },
      {
        type: 'jokerSets',
        sets: [
          {
            weight: 225,
            reps: 2,
          },
          {
            weight: 230,
            reps: 1,
          },
        ],
      },
      {
        type: 'firstSetLast',
        sets: [
          {
            weight: 180,
            reps: 3,
          },
          {
            weight: 180,
            reps: 3,
          },
          {
            weight: 180,
            reps: 3,
          },
          {
            weight: 180,
            reps: 3,
          },
          {
            weight: 180,
            reps: 3,
          },
        ],
      },
      {
        type: 'accessory',
        subType: 'front squat',
        sets: [
          {
            weight: 75,
            reps: 8,
          },
          {
            weight: 75,
            reps: 8,
          },
          {
            weight: 85,
            reps: 5,
          },
        ],
      },
      {
        type: 'accessory',
        subType: 'hanging abs',
        sets: [
          {
            weight: 0, reps: 8,
          },
          {
            weight: 0,
            reps: 6,
          },
          {
            weight: 0,
            reps: 6,
          },
        ],
      },
      {
        type: 'cardio',
        subType: 'prowler',
        notes: '95, 135, 185, 225',
      },
    ],
  },
];
