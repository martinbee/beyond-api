# DB STRUCTURE

## Users

| Property                   | Type    | Description                                           |
| :---                       | :---    | :---                                                  |
| `username`                 | string  | A user's username                                     |
| `trainingMaxes`            | object  | Contains an object with a TM value for each core lift |
| `trainingMaxes - Press`    | integer | A user's training max for barbell press               |
| `trainingMaxes - Deadlift` | integer | A user's training max for the deadlift                |
| `trainingMaxes - Bench`    | integer | A user's training max for bench press                 |
| `trainingMaxes - Squat`    | integer | A user's training max for squats                      |
| `authFiller`               | string  | Stub space for token or other auth                    |

## Workouts

| Property                         | Type             | Description                              |
| :---                             | :---             | :---                                     |
| `userId`                         | string           | Who's workout is it                      |
| `liftType`                       | string           | Type of lift (bench, press, etc.)        |
| `mobilityWork`                   | boolean          | Whether or not mobility work was done    |
| `warmups`                        | array of objects | Warmups before core lift                 |
| `warmups - weight`               | integer          | Warmup weight                            |
| `warmups - reps`                 | integer          | Warmup reps                              |
| `coreLift`                       | array of objects | Core lifts                               |
| `coreLift - weight`              | integer          | Core lift weight                         |
| `coreLift - reps`                | integer          | Core lift reps                           |
| `jokerSets`                      | array of objects | Joker sets                               |
| `jokerSets - weight`             | integer          | Joker set weight                         |
| `jokerSets - reps`               | integer          | Joker set reps                           |
| `firstSetLast`                   | object           | First core lift set repeated as a deload |
| `firstSetLast - weight`          | integer          | First core lift weight                   |
| `firstSetLast - sets`            | array of objects | Sets of deload                           |
| `firstSetLast - sets - reps`     | integer          | Each set consists of a number of reps    |
| `accessoryLifts`                 | array of objects | Accessory lift                           |
| `accessoryLifts - exercise`      | string           | The type of accessory lift               |
| `accessoryLifts - sets`          | array of objects | Accessory lift sets                      |
| `accessoryLifts - sets - reps`   | integer          | Accessory lift set reps                  |
| `accessoryLifts - sets - weight` | integer          | Accessory lift set weight                |
| `cardio`                         | array of objects | Cardio work done                         |
| `cardio - exercise`              | string           | The type of cardio                       |
| `cardio - notes`                 | string           | Notes on the cardio workout              |
