import React from "react";
import { CardDeck, Container, CardColumns } from "react-bootstrap";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { itemData, itemData1 } from "../data/itemData";

const App = () => (
  <>
    <Header />
    <Container>
      <CardColumns>
        <List id={1} items={itemData} />
        <List id={2} items={itemData1} />
        <List id={3} items={itemData} />
        <List id={4} items={itemData} />
        <List id={5} items={itemData1} />
        <List id={6} items={itemData} />
      </CardColumns>
    </Container>
    <Footer />
  </>
);

export default App;
