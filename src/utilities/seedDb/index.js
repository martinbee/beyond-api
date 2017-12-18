import findUser from './findUser';
import insertStubUser from './insertStubUser';
import insertStubWorkouts from './insertStubWorkouts';

export default async function initStubData() {
  const isThereAlreadyAUser = await findUser();

  if (isThereAlreadyAUser) return;

  const newStubUser = await insertStubUser();
  await insertStubWorkouts(newStubUser)

  console.log(`${newStubUser.username} successfully seeded.`);
}
