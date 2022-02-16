import React from "react";
import { Link } from "react-router-dom";

import lyric_file from "../../assets/count_me.txt";
import lyric_fa_file from "../../assets/count_me_fa.txt";

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
import { IconButton, SimpleGrid, GridItem, Grid } from "@chakra-ui/react";
import { DownloadIcon, SpinnerIcon, CheckIcon } from "@chakra-ui/icons";
import { getIconMap } from "ionicons/dist/types/components/icon/utils";
import db from "../db/db";
import { getOfflineSongUrl } from "../db/utility";

import { useLiveQuery } from "dexie-react-hooks";

const songsList = [
  {
    id: 1,
    title: "count on you",
    lyric_file: lyric_file,
    lyric_fa_file: lyric_fa_file,

    src:
      "https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3"
  },
  {
    id: 2,
    title: "shakira",
    lyric_file: lyric_file,
    lyric_fa_file: lyric_fa_file,

    src:
      "https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3"
  },
  {
    id: 3,
    title: "catty perry",
    lyric_file: lyric_file,
    lyric_fa_file: lyric_fa_file,

    src:
      "https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3"
  }
];

function getIconJsx() {
  if (true) {
    return <DownloadIcon />;
  }
  if (true) {
    return <DownloadIcon />;
  }
  if (true) {
    return <DownloadIcon />;
  }
}
const Home: React.FC = (props) => {
  const db_songs = useLiveQuery(() => db.songs.toArray());

  if (!db_songs) return null;

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
            <SimpleGrid columns={2} spacingX={1} spacingY={1}>
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
                      <h1> {getOfflineSongUrl(db_songs, song.title)}</h1>
                    </IonCardContent>
                  </IonCardHeader>
                </IonCard>
              </Link>

              <IconButton
                aria-label="download"
                icon={<DownloadIcon />}
                size="md"
                onClick={() => {
                  this.downloadAndStore(song.title, song.src);
                }}
              />
            </SimpleGrid>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
