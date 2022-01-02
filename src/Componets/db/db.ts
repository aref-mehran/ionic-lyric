import Dexie from "dexie";

const db = new Dexie("MySongDb");
db.version(1).stores({
  songs: "song_name"
});
export default db;
