import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.load();

async function connect() {
  try {
    const db = await MongoClient.connect(process.env.DB_URI);
    console.log("Connected correctly to server");

    return db;
  } catch(e) {
    console.log(e.stack);
  }
}

async function disconnect(db) {
  try {
    db.close();
    console.log("Disconnected from server");
  } catch(e) {
    console.log(e.stack);
  }
}

export { connect, disconnect };
