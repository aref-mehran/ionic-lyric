import {
  IonContent,
  //IonHeader,
  IonPage,
  IonTitle,
  IonCard,
  IonButton,
  //IonSlides,
  //IonSlide,
  IonLabel,
  //IonCardHeader,
  IonCardContent,
  //IonCardSubtitle,
  IonCardTitle,
  IonTabBar,
  //IonTabButton,
  IonIcon,
  IonModal,
  IonGrid,
  IonCol,
  IonRow,
  IonFab,
  IonFabButton,
  IonHeader
} from "@ionic/react";
import { apps } from "ionicons/icons";
import { trash, close } from "ionicons/icons";
import React, { useState } from "react";
import "./styles.css";
import Tape from "./Tape";
import MenuApps from "./menuApp";
const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardTitle>Погода</IonCardTitle>
          <IonCardContent style={{ fontSize: "26px" }}>-30 C</IonCardContent>
        </IonCard>
        <Tape />
      </IonContent>

      <IonContent style={{ background: "#0f00" }}>
        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          swipeToClose={true}
        >
          <IonHeader>
            <IonTitle style={{ textAlign: "center" }}>Все сервисы </IonTitle>
            <IonTitle
              color="dark"
              style={{ float: "right", color: "#CCC" }}
              slot=""
              onClick={() => setShowModal(false)}
            >
              <IonIcon
                icon={close}
                style={{ color: "red" }}
              >
                Close
              </IonIcon>
            </IonTitle>
          </IonHeader>

          <MenuApps />
        </IonModal>
      </IonContent>

      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton>
          <IonIcon
            name="apps"
            icon={apps}
            onClick={() => setShowModal(true)}
          ></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Home;
