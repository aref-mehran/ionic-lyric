import React from "react";
import { Link } from "react-router-dom";
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

const songsList = [
  { id: 1, title: "count on you" },
  { id: 2, title: "shakira" },
  { id: 3, title: "catty perry" }
];

const Home: React.FC = (props) => {
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
            <>
              <IonCard className="weather-box">
                <IonCardHeader>
                  <IonCardTitle>{song.title}</IonCardTitle>
                  <Link to="/Player"></Link>

                  <IonCardContent>
                    <h1>{song.title}</h1>
                    <h1>{song.id}</h1>
                  </IonCardContent>
                </IonCardHeader>
              </IonCard>
            </>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
