import React from "react";
import { Link } from "react-router-dom";

import lyric_file from "../../assets/count_me.txt";
import lyric_fa_file from "../../assets/count_me_fa.txt";
import src_file from "../../assets/count_me.mp3";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
//import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

import Dexie from "dexie";

const songsList = [
  {
    id: 1,
    title: "count on you",
    lyric_file: lyric_file,
    lyric_fa_file: lyric_fa_file,

    src_file: src_file
  },
  {
    id: 2,
    title: "shakira",
    src:
      "https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3"
  },
  {
    id: 3,
    title: "catty perry",
    src:
      "https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3"
  }
];

let db = new Dexie("MySongDb");
db.version(1).stores({
  songs: "name"
});

// Download and store an image
async function downloadAndStoreImage() {
  const res = await fetch(
    "https://lh3.googleusercontent.com/ogw/ADea4I6emHqWP7530CdOSeUFSMz7xgBpmm4odpF7ZXTe-Q=s83-c-mo"
  );
  const blob = await res.blob();
  // Store the binary data in indexedDB:
  await db.songs.put({
    name: "Mehran",
    image: blob
  });
}
downloadAndStoreImage();
const Home: React.FC = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>لیست آهنگ ها</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {songsList.map((song) => {
          return (
            <Link
              to={{
                pathname: "/Player",
                state: song
              }}
            >
              <IonCard className="weather-box">
                <IonCardHeader>
                  <IonCardTitle>{song.title}</IonCardTitle>

                  <IonCardContent>
                    <h1>{song.title}</h1>
                    <h1>{song.id}</h1>
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>
            </Link>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
