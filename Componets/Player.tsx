import React from "react";
import { useEffect } from "react";

import textfile from "../src/assets/count_me.txt";
import {
  ChakraProvider,
  SimpleGrid,
  List,
  ListItem,
  Box
} from "@chakra-ui/react";

import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { setInterval } from "timers";

const Player: React.FC = () => {
  alert("start");

  const [lyric_parts, set_lyric_parts] = React.useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      let tempTime = document.getElementById("playerId").currentTime;
      let index = 0;

      console.log(lyric_parts);
      let lyric_time_arr = lyric_parts.map((data) => {
        return data.seek_time;
      });

      if (lyric_time_arr.indexOf(tempTime) == -1) {
        index = [...lyric_time_arr, tempTime]
          .sort((a, b) => a - b)
          .indexOf(tempTime);
      } else {
        index = lyric_time_arr.indexOf(tempTime);
      }
      console.log(index, tempTime);
    }, 1000);

    // clearing interval
    return () => clearInterval(timer);
  }, [lyric_parts]);

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchLyric() {
      let response = await fetch(textfile);
      let txt_content = await response.text();
      let lyric_lines = txt_content.split("\n");

      let arr = [];
      for (let line of lyric_lines) {
        // alert(line);

        let sentence = line.split("]")[1];
        let time_str = line.split("]")[0].split("[")[1];
        let min = Number(time_str.split(":")[0]);
        let sec = Number(time_str.split(":")[1]);
        let seek_time = min * 60 + sec;
        arr.push({ seek_time: seek_time, sentence: sentence });
      }

      set_lyric_parts(arr);
      alert("use effect");

      setLoading(false);

      // alert(lyric_parts[0].sentence);
    }
    fetchLyric();
  }, []);

  if (isLoading) return "Loading...";
  // alert(lyric_parts);
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
              // autoPlay
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid mt={10} columns={2} spacingX={1} spacingY={1} height={400}>
          <List overflow="scroll">
            {lyric_parts.map((data, idx) => {
              return (
                <ListItem
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={20}
                  color="green.500"
                  fontStyle="italic"
                  value="frfr"
                  cursor="pointer"
                  onClick={async (e) => {
                    let s = document.getElementById("playerId");
                    s.currentTime = data.seek_time;
                  }}
                >
                  {data.sentence}
                  <br />
                  {data.seek_time}
                  <br />
                </ListItem>
              );
            })}
            <ListItem
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              color="green.500"
              fontStyle="italic"
              opacity={0.87}
            >
              list
            </ListItem>
          </List>
          <List overflow="scroll">
            <ListItem
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              color="blue.500"
              fontStyle="italic"
            >
              persian
            </ListItem>
            <ListItem
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              color="green.500"
              fontStyle="italic"
              opacity={0.87}
            >
              list
            </ListItem>
          </List>
        </SimpleGrid>
      </ChakraProvider>
    </IonPage>
  );
};

export default Player;
