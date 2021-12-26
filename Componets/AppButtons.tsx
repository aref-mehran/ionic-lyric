import React from "react";
import { IonIcon, IonButton, IonLabel } from "@ionic/react";
import { bus } from "ionicons/icons";

//const servicesDefull = [];
const AppBtn: React.FC = () => {
  return (
    <IonButton>
      <IonIcon icon={bus}></IonIcon>
      <IonLabel> Транспорт</IonLabel>
    </IonButton>
  );
};
export default AppBtn;
