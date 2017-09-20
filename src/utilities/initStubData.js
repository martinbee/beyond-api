import users from '../resources/stubData/users';
import workouts from '../resources/stubData/workouts';
import { MongoClient } from 'mongodb';


export default async function() {
  try {
    const db = await MongoClient.connect('mongodb://localhost:27017/beyond');
    console.log("Connected correctly to server");

    const response = await db.collection('users').insertMany(users);
    const userIds = response.insertedIds;
    console.log("Inserted stub users");

    userIds.forEach(userId => {
      workouts.forEach(async function(workout) {
        const workoutAttachedToUser = { ...workout, userId };

        await db.collection('workouts').insertOne(workoutAttachedToUser);
      });
    });
    console.log("Attached workouts to users and inserted.");

    db.close();
  } catch(e) {
    console.log(e.stack);
  }
};
