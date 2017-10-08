# Client Methods

## Add new workout

This method will need to grab the most recent workout, check its lift type, and
use a preset lift type order to create a new workout. From there it will need to
look at the users trainingMaxes and set up the workout correctly. It will then
return that workout to the client.

// check last workout
// check order in workout series
// get users training maxes
// build workout object based on those maxes
// this process will require a good deal of utility functions
// post to server on save
