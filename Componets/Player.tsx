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

const Player: React.FC = () => {
  let lyric_parts = [];
  let items = [
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf",
    "dfdf",
    "dfd",
    "dfdf"
  ];

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    async function fetchLyric() {
      let response = await fetch(textfile);
      let txt_content = await response.text();
      let lyric_lines = txt_content.split("\n");

      for (let line of lyric_lines) {
        // alert(line);

        let sentence = line.split("]")[1];
        let seek_time = Number(
          line.split("]")[0].split("[")[1].split(":")[1]
        ).toFixed(2);
        lyric_parts.push({ seek_time: seek_time, sentence: sentence });
      }

      setLoading(false);

      // alert(lyric_parts[0].sentence);
    }
    fetchLyric();
  });

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
              // autoPlay
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid mt={10} columns={2} spacingX={1} spacingY={1} height={400}>
          <List overflow="scroll">
            {items.map((data, idx) => {
              return (
                <ListItem
                  fontWeight="bold"
                  textAlign="center"
                  fontSize={20}
                  color="green.500"
                  fontStyle="italic"
                  value="frfr"
                  // onClick={async (e) => {
                  //   let s = document.getElementById("playerId");
                  //   s.currentTime = data.seek_time;
                  // }}
                >
                  'SDDDD'
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
