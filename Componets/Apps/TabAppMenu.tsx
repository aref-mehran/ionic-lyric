import React, { useState } from "react";

import { SimpleGrid, List, ListItem } from "@chakra-ui/react";
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
import { playCircle } from "ionicons/icons";

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
        <SimpleGrid columns={1} spacingX={1} spacingY={1} height={400}>
          <List overflow="scroll">
            <ListItem
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              color="green.500"
              fontStyle="italic"
            >
              list
            </ListItem>
            <ListItem
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              color="green.500"
              fontStyle="italic"
              opacity={1}
            >
              list
            </ListItem>
            <copyIcon />
          </List>
        </SimpleGrid>
      </IonContent>
    </IonPage>
  );
};

export default AppMenu;
