import React from "react";
import { Card } from "react-bootstrap";

export class StylishCard extends React.Component<StylishCardProps> {
  private variant = (): string => {
    const vals = [
      "#eb9694",
      "#fad0c3",
      "#fef3bd",
      "#c1e1c5",
      "#bedadc",
      "#c4def6",
      "#d4c4fb",
    ];
    return vals[this.props.id.charCodeAt(0) % vals.length];
  };

  render() {
    return (
      <Card style={{ backgroundColor: this.variant() }}>
        {this.props.children}
      </Card>
    );
  }
}

interface StylishCardProps {
  id: string;
}
