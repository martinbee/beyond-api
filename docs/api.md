# API

## /users

#### GET

- Lists all users. Will probably be removed in production.
- Returns an array of user objects.

### /users/:userId

#### GET

- Gets a particular user based on the passed userId.
- Returns the matching user object.

#### PATCH

- Updates a particular user based on the passed userId.
- The body should contain updates to that user.
- Returns the updated user object.

### /users/:userId/workouts

#### GET

- Lists all workouts attached to the passed userId.
- Returns an array of workout objects.

#### POST

- Creates a new workout attached to the passed userId.
- The body should contain a valid workout object.
- Returns the new workout object.

### /users/:userId/workouts/:workoutId

#### GET

- Gets a particular workout based on the passed userId and workoutId.
- Returns the matching workout object.

#### PATCH

- Updates a particular workout based on the passed userId and workoutId.
- The body should contain updates to that workout.
- Returns the updated workout object.
