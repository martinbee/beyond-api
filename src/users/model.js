import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TrainingMaxSchema = new Schema({
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
  trainingMax: TrainingMaxSchema,
});

export default model('user', UserSchema);