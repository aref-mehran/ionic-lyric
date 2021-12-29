import React from "react";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import textfile from "../src/assets/count_me.txt";
import textfile_fa from "../src/assets/count_me_fa.txt";

import {
  ChakraProvider,
  SimpleGrid,
  List,
  ListItem,
  Box
} from "@chakra-ui/react";

import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { setInterval } from "timers";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

const Player: React.FC = () => {
  const [lyric_parts, set_lyric_parts] = React.useState([]);
  const [lyric_parts_fa, set_lyric_parts_fa] = React.useState([]);

  const [lyric_curr_index, set_lyric_curr_index] = React.useState(0);
  const [isLoading, setLoading] = React.useState(true);
  const location = useLocation();
  console.log(location);

  function setCurrentLyric() {
    let playerEl = document.getElementById("playerId");
    if (playerEl.paused) {
      return;
    }
    let tempTime = playerEl.currentTime;
    let index = 0;

    let lyric_time_arr = lyric_parts.map((data) => {
      return data.seek_time;
    });

    if (lyric_time_arr.indexOf(tempTime) === -1) {
      index =
        [...lyric_time_arr, tempTime].sort((a, b) => a - b).indexOf(tempTime) -
        1;
    } else {
      index = lyric_time_arr.indexOf(tempTime);
    }
    set_lyric_curr_index(index);

    let el = document.getElementById("item" + index);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
  async function readLyricFile(file) {
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
  //https://usehooks-ts.com/react-hook/use-interval
  useInterval(() => {
    setCurrentLyric();
  }, 500);

  // useEffect(() => {

  //   // clearing interval
  //   // return () => {clearInterval(timer);alert('clreaed')};
  // }, []);

  useEffect(() => {
    async function fetchLyric() {
      let arr = await readLyricFile(textfile);
      set_lyric_parts(arr);

      let arr_fa = await readLyricFile(textfile_fa);
      set_lyric_parts_fa(arr_fa);

      setLoading(false);
    }
    fetchLyric();
  }, []);

  if (isLoading) return "Loading...";
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>پخش آهنگ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ChakraProvider resetCSS>
        <SimpleGrid columns={2} spacingX={1} spacingY={1}>
          <Box ml="25%" mr="25%">
            <audio
              id="playerId"
              src="https://dl.musicdel.ir/Music/1400/05/bruno_mars_count_on%20me%20128.mp3"
              controls
              loop
              // autoPlay
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid mt={10} columns={1} spacingX={1} spacingY={1} height={400}>
          <List overflow="scroll">
            {lyric_parts.map((data, idx) => {
              return (
                <ListItem
                  key={idx}
                  id={"item" + idx}
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={20}
                  color={lyric_curr_index === idx ? "green" : "black"}
                  fontStyle="italic"
                  value="frfr"
                  cursor="pointer"
                  onClick={async (e) => {
                    let s = document.getElementById("playerId");
                    s.currentTime = data.seek_time;
                    s.play();
                  }}
                >
                  {data.sentence}
                  <div style={{ fontSize: "small" }}>
                    {lyric_curr_index === idx
                      ? lyric_parts_fa[idx].sentence
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
};

export default Player;
