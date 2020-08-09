import React from "react";
import { CardDeck } from "react-bootstrap";
import { MDBContainer, MDBRow } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/App.scss";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { itemData } from "../data/itemData";

const App = () => (
  <>
    <Header />
    <MDBContainer>
      <MDBRow>
        <List id={1} key="2" items={itemData} />
        <List id={2} key="1" items={itemData} />
      </MDBRow>
    </MDBContainer>
    <Footer />
  </>
);

export default App;
