import db from "./db";

export function getOfflineSongUrl(db_songs, title) {
  if (!db_songs) {
    return;
  }
  let matched = db_songs.filter((el) => el.song_name === title);
  if (matched.length === 1) {
    return matched[0].url;
  }
  return null;
}
