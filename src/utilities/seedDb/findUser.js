import User from '../../users/model';

export default async function findUser() {
  try {
    return User.findOne({});
  } catch (err) {
    throw new Error(err.message);
  }
}
