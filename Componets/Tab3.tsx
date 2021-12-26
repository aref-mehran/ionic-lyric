import React from "react";
import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
//import ExploreContainer from '../components/ExploreContainer';
//import './Tab3.css';
import ReactAudioPlayer from "react-audio-player";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Карта города</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ReactAudioPlayer
        src="/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg"
        controls
      />
      , salam
    </IonPage>
  );
};

export default Tab3;
