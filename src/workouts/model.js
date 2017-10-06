import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SetSchema = new Schema({
  weight: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
});

const FirstSetLastSchema = new Schema({
  weight: {
    type: Number,
  },
  sets: [{ reps: Number }],
});

const AccessoryLiftSchema = new Schema({
  excercise: {
    type: String,
    required: true,
  },
  sets: [SetSchema],
});

const CardioSchema = new Schema({
  excercise: {
    type: String,
    required: true,
  },
  notes: String,
});

const WorkoutSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  liftType: {
    type: String,
    required: true,
  },
  mobilityWork: {
    type: Boolean,
    required: true,
  },
  warmups: [SetSchema],
  coreLifts: [SetSchema],
  jokerSets: [SetSchema],
  firstSetLast: FirstSetLastSchema,
  accessoryLifts: [AccessoryLiftSchema],
  cardio: CardioSchema,
});

export default model('workout', WorkoutSchema);
