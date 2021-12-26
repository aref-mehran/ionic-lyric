import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
//import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Полезная информация</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className="weather-box">
          <IonCardHeader>
            <IonCardTitle>Погода</IonCardTitle>
            <IonCardContent>
              <h1>Чита</h1>
              <h1>+8</h1>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Новости</IonCardTitle>
            <IonCardContent>
              <h1>Чита</h1>
              <IonList></IonList>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Афиша</IonCardTitle>
            <IonCardContent>
              <h1>Чита</h1>
              <IonList></IonList>
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
