import React from "react";
import {
  ChakraProvider,
  SimpleGrid,
  List,
  ListItem,
  Box
} from "@chakra-ui/react";

import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Player: React.FC = () => {
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
              src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
              controls
              autoPlay
            />
          </Box>
        </SimpleGrid>
        <SimpleGrid mt={10} columns={2} spacingX={1} spacingY={1} height={400}>
          <List overflow="scroll">
            <ListItem
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              color="green.500"
              fontStyle="italic"
              value="frfr"
              onClick={(e) => {
                let s = document.getElementById("playerId");
                s.currentTime = 5;
              }}
            >
              english
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
