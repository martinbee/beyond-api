import find from './find';

export default async function(query = {}) {
  return await find('users', query);
}
