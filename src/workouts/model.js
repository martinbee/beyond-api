// think more about this structure. too much repeated code, could be simplified
// for example, just have an array of exercise objects that say exercise:
// 'coreLifts', or firstSetLast, or whatever and have a optional notes field,
// optional sets field, and then just have one schema type.



import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SetSchema = new Schema({
  _id: false,
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
  _id: false,
  weight: {
    type: Number,
  },
  sets: [
    {
      _id: false,
      reps: Number,
    },
  ],
});

const AccessoryLiftSchema = new Schema({
  _id: false,
  exercise: {
    type: String,
    required: true,
  },
  sets: [SetSchema],
});

const CardioSchema = new Schema({
  _id: false,
  exercise: {
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

export default mongoose.model('workout', WorkoutSchema);
