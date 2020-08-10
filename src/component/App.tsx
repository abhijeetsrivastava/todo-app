import React from "react";
import { CardDeck } from "react-bootstrap";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { List } from "./List";
import { itemData, itemData1 } from "../data/itemData";

const App = () => (
  <>
    <Header />
    <CardDeck>
      <List id={1} items={itemData} />
      <List id={2} items={itemData1} />
      <List id={3} items={itemData} />
    </CardDeck>
    <Footer />
  </>
);

export default App;
