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

const ExerciseSchema = new Schema({
  _id: false,
  type: {
    type: String,
    required: true,
  },
  subType: String,
  notes: String,
  sets: [SetSchema],
});

const WorkoutSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    liftType: {
      type: String,
      required: true,
    },
    week: {
      type: Number,
      required: true,
    },
    mobilityWork: {
      type: Boolean,
      required: true,
    },
    exercises: [ExerciseSchema],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('workout', WorkoutSchema);
