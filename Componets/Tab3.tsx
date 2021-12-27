import React from "react";
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";

import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
//import ExploreContainer from '../components/ExploreContainer';
//import './Tab3.css';
import ReactAudioPlayer from "react-audio-player";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>پخش آهنگ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ChakraProvider resetCSS>
        <SimpleGrid columns={2} spacingX={1} spacingY={1}>
          <ReactAudioPlayer
            src="/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg"
            controls
          />
        </SimpleGrid>
        <SimpleGrid mt={10} columns={2} spacingX={1} spacingY={1} height={400}>
          <div>salam</div>
          <div>salam</div>
          <div>salam</div>
          <div>salam</div>
        </SimpleGrid>
      </ChakraProvider>
    </IonPage>
  );
};

export default Tab3;
