import React from "react";
import { CardDeck } from "react-bootstrap";
import { MDBContainer, MDBRow } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/App.scss";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { itemData, itemData1 } from "../data/itemData";

const App = () => (
  <>
    <Header />
    <MDBContainer>
      <MDBRow>
        <List items={itemData} />
        <List items={itemData1} />
      </MDBRow>
    </MDBContainer>
    <Footer />
  </>
);

export default App;
