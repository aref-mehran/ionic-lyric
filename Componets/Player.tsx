import React from "react";
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
  let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

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
              autoPlay
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
                  onClick={async (e) => {
                    let s = document.getElementById("playerId");
                    s.currentTime = idx;
                    let response = await fetch(textfile);
                    let txt_content = await response.text();
                    console.log(txt_content);
                  }}
                >
                  {data}
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
