import getUsers from '../services/getUsers';

async function handleRequest(req, res) {
  const users = await getUsers();
  console.log(users);

  res.json(users);
}

export default [
  handleRequest,
];
