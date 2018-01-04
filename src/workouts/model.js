import mongoose from 'mongoose';

const Schema = mongoose.Schema;

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

const ExerciseSchema = new Schema({
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
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    liftType: {
      type: String,
      required: true,
    },
    trainingMax: {
      type: Number,
      required: true,
    },
    week: {
      type: Number,
      required: true,
    },
    mobilityWork: {
      type: Boolean,
      default: false,
    },
    exercises: [ExerciseSchema],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('workout', WorkoutSchema);
