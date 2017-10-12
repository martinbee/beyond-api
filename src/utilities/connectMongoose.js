import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.load();

const {
  DB_URI,
} = process.env;

const options = {
  useMongoClient: true,
};

export default async function connectMongoose() {
  console.log('Connecting mongoose to mongo...');

  try {
    await mongoose.connect(DB_URI, options);

    console.log('Mongoose connected!');
    throw new Error('test');
  } catch (err) {
    console.log(`Error connecting to mongo: ${err.message}`);
  }
}
