import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TrainingMaxSchema = new Schema({
  _id: false,
  press: {
    type: Number,
    required: true,
  },
  deadLift: {
    type: Number,
    required: true,
  },
  bench: {
    type: Number,
    required: true,
  },
  squat: {
    type: Number,
    required: true,
  },
});

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  week: {
    type: Number,
    default: 1,
  },
  trainingMax: TrainingMaxSchema,
});

export default mongoose.model('user', UserSchema);
