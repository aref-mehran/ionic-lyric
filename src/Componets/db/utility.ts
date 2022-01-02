import db from "./db";

export function getOfflineSongUrl(db_songs, title) {
  console.log(db_songs, title);
  let matched = db_songs.filter((el) => el.song_name === title);
  if (matched.length === 1) {
    return matched[0].url;
  }
  return null;
}
