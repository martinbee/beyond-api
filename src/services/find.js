import { connect, disconnect } from './utilities';

export default async function(collection, query) {
  try {
    const db = await connect();
    const result = await db.collection(collection).find(query).toArray();

    disconnect(db);

    return result;
  } catch (e) {
    console.log(e.stack);
  }
}
