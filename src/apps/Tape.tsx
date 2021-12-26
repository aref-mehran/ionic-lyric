import {
  IonCard,
  IonSlides,
  IonSlide,
  //IonLabel,
  IonCardHeader,
  IonCardContent,
  //IonCardSubtitle,
  IonCardTitle,
  //IonContent,
  IonList,
  IonItem
} from "@ionic/react";

import React from "react";
import { apps, bus } from "ionicons/icons";

const Tape: React.FC = () => {
  const MenuItems = ["Новости", "Афиша", "Транспорт"];
  const news = ["новость 1", "Правзнование нового 2021 года ", "Covid19"];
  return (
    <IonCard style={{ overflow: "none", hieght: "100vh" }}>
      <IonCardHeader>
        <IonSlides>
          {MenuItems.map((name, i) => (
            <IonSlide>
              <IonCardTitle>{name}</IonCardTitle>
            </IonSlide>
          ))}
        </IonSlides>
      </IonCardHeader>
      <IonCardContent style={{ overflow: "none" }}>
        {news.map((item) => (
          <IonItem>{item}</IonItem>
        ))}
      </IonCardContent>
    </IonCard>
  );
};
export default Tape;
