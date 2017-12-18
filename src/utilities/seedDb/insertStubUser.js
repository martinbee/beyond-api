import User from '../../users/model';
import stubUser from './stubData/user';

export default async function insertStubUser() {
  const user = new User(stubUser);

  try {
    return user.save();
  } catch (err) {
    throw new Error(err.message);
  }
}
