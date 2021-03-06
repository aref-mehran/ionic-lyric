import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, map } from "ionicons/icons";
import Home from "./Componets/Home/Home";

import Player from "./Componets/Player";

//import React from "react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
/*
const appssDefault = [
  { id: 1, title: "Траспорт" },
  { tid: 2, title: "ЖКХ" },
  { id: 3, title: "Культура" },
  { id: 4, title: "Туризм" },
  { id: 5, title: "Голосования" }
];
*/

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/tab1">
              <Home />
            </Route>
            <Route path="/player">
              <Player />
            </Route>

            <Route exact path="/">
              <Redirect to="/tab1" />
            </Route>
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>خانه</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Player" href="/Player">
            <IonIcon icon={map} />
            <IonLabel>پلیر</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
