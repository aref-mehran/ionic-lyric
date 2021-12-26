import {
  IonContent,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonHeader,
  IonModal,
  IonItem,
  IonIcon,
  IonList,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton
} from "@ionic/react";
import React, { useState } from "react";
import { bus } from "ionicons/icons";
import { camera } from "ionicons/icons";

const MenuApps: React.FC = () => {
  //const [setShowModal] = useState(false);
  const Menuitems = [
    "Транспорт",
    "Адреса",
    "Больницы",
    "Гостиницы",
    "АЗС",
    "Магазины",
    "Афиша"
  ];
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          {Menuitems.map((item) => (
            <IonCard>
              <IonIcon style={{ color: "blue" }} icon={bus}></IonIcon>
              <IonIcon icon={camera}>rfcthf</IonIcon>
              {item}
            </IonCard>
          ))}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};
export default MenuApps;
