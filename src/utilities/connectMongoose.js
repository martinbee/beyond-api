import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.load();

const {
  DB_URI,
} = process.env;

const options = {
  useMongoClient: true,
};

export default function connectMongoose() {
  console.log('Connecting mongoose to mongo...');

  mongoose.connect(DB_URI, options, (err) => {
    if (err) throw new Error(err.message);

    console.log('Mongoose connected!');
  });
}
