import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonCard,
  IonAvatar,
  IonList,
  IonItem
} from "@ionic/react";
import React, { useState, useCallback, useContext } from "react";
const items = [
  { title: "Мои маршруты", url: "routes" },
  { title: "Любимые места", url: "likePlace" },
  { title: "История обращений", url: "historyReq" },
  { title: "Настойка виджетов", url: "viewSetting" },
  { title: "Общие Настройки", url: "settings" },
  { title: "О прииложении", url: "info" }
];

const Cabinet: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Личный кабинет</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard>
          <IonAvatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </IonAvatar>

          <h2> Ваш статус</h2>
          <IonCard>
            <h1
              style={{
                color: "#FFF",
                background: "green",
                padding: "0 auto",
                margin: "0px"
              }}
            >
              {" "}
              10000 Балов
            </h1>
          </IonCard>
        </IonCard>
        <IonList>
          {console.log("Apps:")}
          {items.map((serv) => (
            <IonItem
              key={serv.title}
              style={{
                border: "1px  solid #endregion",
                background: "#0F0",
                borderRadius: 10,
                tetxAlign: "center"
              }}
            >
              <IonLabel>
                <h3>{serv.title}</h3>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default Cabinet;
