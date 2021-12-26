import React, { useState } from "react";
import {
  IonIcon,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonModal
} from "@ionic/react";
import { useIonModal } from "@ionic/react";
import "./Tab2.css";
import Jkh from "./jkh";
import AppBtn from "../AppButtons";
import {
  bus,
  heart,
  car,
  cash,
  wifi,
  chatbox,
  business,
  close
} from "ionicons/icons";
const appssDefault = [
  { id: 1, title: "Траспорт", icn: bus, url: "/bus" },
  { id: 2, title: "Туризм", inc: car, url: "/car" },
  { id: 3, title: "ЖКХ", icn: business, url: "/jkh" },
  { id: 4, title: "Культура", url: "/kultura" },
  { id: 5, title: "Бизнес", icn: cash, url: "/business" },
  { id: 6, title: "Free Wi-Fi", icn: wifi, url: "/internet" },
  { id: 7, title: "Здоровье", icn: heart, url: "/heart" },
  { id: 8, title: "Обращения", icn: chatbox, url: "/talk" }
];

const AppMenu: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage style={{ overflow: "hidden" }}>
      <IonHeader style={{ background: "blue" }}>
        <IonToolbar style={{ background: "blue" }}>
          <IonTitle>Сервисы</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid style={{ height: "100vh", background: "#D3D3D3" }}>
          <IonRow>
            {console.log("Apps:")}
            {appssDefault.map((serv) => (
              <IonCol
                size="2"
                className="new-track"
                key={serv.id}
                onClick={() => setShowModal(true)}
              >
                <IonItem
                  lines="none"
                  style={{
                    borderRadius: "5px",
                    border: "1px outset ",
                    background: "orange"
                  }}
                >
                  <IonIcon
                    icon={serv.icn}
                    style={{
                      color: "#444",
                      width: "100%",
                      padding: "0 auto"
                    }}
                  />
                </IonItem>
                <IonLabel
                  style={{
                    fontSize: "12px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  {serv.title}
                </IonLabel>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonModal
        id="miniApp"
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        swipeToClose={true}
      >
        <IonToolbar>
          <IonHeader>
            <IonTitle> Title</IonTitle>
          </IonHeader>
        </IonToolbar>
        <IonContent>
          <Jkh />
        </IonContent>
        <IonButton onClick={() => setShowModal(false)}>
          <IonIcon icon={close} />
        </IonButton>
      </IonModal>
    </IonPage>
  );
};

export default AppMenu;
