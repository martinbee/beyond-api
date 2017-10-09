import Workout from '../model';

export default function create(req, res, next) {
  const { userId } = req.body;

  // find most recent workout (date_created) with that userId

  // using that workout get week and lift

  // check week and lift for TM bump (if required update user)
  // using lift order constant, if last workout in order and week 3, update

  // get next lift
  // get related tm
  // calculate new workouts percentages
  // create new workout and return to client

  //const newWorkout = new Workout(req.body);

  //newWorkout
    //.save()
    //.exec((err, workout) => {
      //if (err) {
        //next(err);
      //} else {
        //res.send(workout);
      //}
    //});
  res.send('new workout');
}
