//import users from '../../data/users';
//import workouts from '../../data/workouts';
//import { MongoClient } from 'mongodb';
//import dotenv from 'dotenv';

//if (process.env.NODE_ENV !== 'production') dotenv.load();

//export default async function() {
  //try {
    //const db = await MongoClient.connect(process.env.DB_URI);
    //console.log("Connected correctly to server");

    //const response = await db.collection('users').insertMany(users);
    //const userIds = response.insertedIds;
    //console.log("Inserted stub users");

    //userIds.forEach(userId => {
      //workouts.forEach(async function(workout) {
        //const workoutAttachedToUser = { ...workout, userId };

        //await db.collection('workouts').insertOne(workoutAttachedToUser);
      //});
    //});
    //console.log("Attached workouts to users and inserted.");

    //db.close();
  //} catch(e) {
    //console.log(e.stack);
  //}
//};
