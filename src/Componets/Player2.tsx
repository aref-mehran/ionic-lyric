import React from "react";
import { withRouter } from "react-router-dom";

import Dexie from "dexie";
import { liveQuery } from "dexie";
import db from "./db";

import {
  ChakraProvider,
  SimpleGrid,
  List,
  ListItem,
  Box,
  Button,
  IconButton
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const observable = liveQuery(
  () => db.songs.toArray() // A promise-returning function that queries Dexie.
);

class Player2 extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      lyric_parts: [],
      lyric_parts_fa: [],
      lyric_curr_index: 0,
      isLoading: true,
      intervalId: 0,
      songs: [],
      db_songs: [],
      db_errors: []
    };

    this.fetchLyric();
  }

  async componentDidMount() {
    let intervalId = setInterval(() => {
      this.setCurrentLyric();
    }, 1000);

    this.subscription = observable.subscribe(
      (result) => {
        this.setState({ db_songs: result });
        alert("new observe");
      },
      (error) => this.setState({ db_errors: error })
    );

    this.setState({ intervalId: intervalId });

    let songs = await db.songs.toArray();

    let blob = songs[0].image;
    songs[0].url = URL.createObjectURL(blob);
    this.setState({ songs: songs });
  }

  componentDidUpdate() {
    // alert("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.state.intervalId);
    clearInterval(this.state.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  // Download and store an image
  async downloadAndStore(song_name, url) {
    const res = await fetch(url);
    const blob = await res.blob();
    // Store the binary data in indexedDB:
    await db.songs.put({
      song_name: song_name,
      song_data: blob
    });
  }

  static async getDerivedStateFromProps() {}

  async readLyricFile(file) {
    let response = await fetch(file);
    let txt_content = await response.text();
    let lyric_lines = txt_content.split("\n");

    let arr = [];
    for (let line of lyric_lines) {
      let sentence = line.split("]")[1];
      let time_str = line.split("]")[0].split("[")[1];
      let min = Number(time_str.split(":")[0]);
      let sec = Number(time_str.split(":")[1]);
      let seek_time = min * 60 + sec;
      arr.push({ seek_time: seek_time, sentence: sentence });
    }

    return arr;
  }
  async fetchLyric() {
    let arr = await this.readLyricFile(this.props.location.state.lyric_file);

    this.setState({ lyric_parts: arr });

    let arr_fa = await this.readLyricFile(
      this.props.location.state.lyric_fa_file
    );
    this.setState({ lyric_parts_fa: arr_fa });
    this.setState({ isLoading: false });
  }

  getAudioElement() {
    let ad = document.getElementById("playerId") as HTMLAudioElement;
    return ad;
  }

  setCurrentLyric() {
    let playerEl = this.getAudioElement();
    if (!playerEl) {
      return;
    }
    console.log(playerEl);
    if (playerEl.paused) {
      return;
    }
    let tempTime = playerEl.currentTime;
    let index = 0;

    let lyric_time_arr = this.state.lyric_parts.map((data) => {
      return data.seek_time;
    });

    if (lyric_time_arr.indexOf(tempTime) === -1) {
      index =
        [...lyric_time_arr, tempTime].sort((a, b) => a - b).indexOf(tempTime) -
        1;
    } else {
      index = lyric_time_arr.indexOf(tempTime);
    }

    this.setState({ lyric_curr_index: index });

    let el = document.getElementById("item" + index);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }

  render() {
    if (this.state.isLoading) return "Loading...";
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>پخش آهنگ</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ChakraProvider resetCSS>
          <SimpleGrid columns={2} spacingX={1} spacingY={1}>
            <Box>
              <audio
                id="playerId"
                src={this.props.location.state.src}
                controls
                loop
                controlsList="nodownload"
                // autoPlay
              />
            </Box>
            <Box>
              <IconButton
                aria-label="download"
                icon={<DownloadIcon />}
                size="md"
                onClick={() => {
                  this.downloadAndStore(
                    this.props.location.state.title,
                    this.props.location.state.src
                  );
                }}
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            mt={10}
            columns={1}
            spacingX={1}
            spacingY={1}
            height={400}
          >
            <List overflow="scroll">
              {this.state.lyric_parts.map((data, idx) => {
                return (
                  <ListItem
                    key={idx}
                    id={"item" + idx}
                    fontWeight="bold"
                    textAlign="center"
                    fontSize={20}
                    color={
                      this.state.lyric_curr_index === idx ? "green" : "black"
                    }
                    fontStyle="italic"
                    value="frfr"
                    cursor="pointer"
                    onClick={async (e) => {
                      let s = this.getAudioElement();
                      s.currentTime = data.seek_time;
                      s.play();
                    }}
                  >
                    {data.sentence}
                    <div style={{ fontSize: "small" }}>
                      {this.state.lyric_curr_index === idx
                        ? this.state.lyric_parts_fa[idx].sentence
                        : ""}
                    </div>
                    <br />
                  </ListItem>
                );
              })}
              <ListItem
                fontWeight="bold"
                textAlign="center"
                fontSize={20}
                color="black"
                fontStyle="italic"
                opacity={0.87}
              ></ListItem>
            </List>
          </SimpleGrid>
        </ChakraProvider>
      </IonPage>
    );
  }
}
export default withRouter(Player2);
