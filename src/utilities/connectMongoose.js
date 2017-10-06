import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.load();

const {
  DB_URI,
} = process.env;

const options = {

};

export default function connectMongoose() {
  mongoose.connect(DB_URI, options, (err) => {
    if (err) throw new Error(err.message);
  });
}
