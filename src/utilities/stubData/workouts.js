export default [
  {
    liftType: 'press',
    mobilityWork: true,
    warmups: [
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
    coreLifts: [
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
        reps: 5,
      },
    ],
    jokerSets: [
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
    firstSetLast: {
      weight: 60,
      sets: [
        { reps: 3 },
        { reps: 3 },
        { reps: 3 },
        { reps: 3 },
        { reps: 3 },
      ],
    },
    accessoryLifts: [
      {
        exercise: 'pull-ups',
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
        exercise: 'incline press',
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
    ],
    cardio: {
      exercise: 'prowler',
      notes: '95, 135, 185, 225',
    },
  },
  {
    liftType: 'deadLift',
    mobilityWork: true,
    warmups: [
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
    coreLifts: [
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
    jokerSets: [
      {
        weight: 225,
        reps: 2,
      },
      {
        weight: 230,
        reps: 1,
      },
    ],
    firstSetLast: {
      weight: 180,
      sets: [
        { reps: 3 },
        { reps: 3 },
        { reps: 3 },
        { reps: 3 },
        { reps: 3 },
      ],
    },
    accessoryLifts: [
      {
        exercise: 'front squat',
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
        exercise: 'ab raise',
        sets: [
          {
            weight: 0,
            reps: 8,
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
    ],
    cardio: {
      exercise: 'prowler',
      notes: '95, 135, 185, 225',
    },
  },
];
