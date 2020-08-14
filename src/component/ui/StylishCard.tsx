import React from "react";
import { Card } from "react-bootstrap";

export class StylishCard extends React.Component<StylishCardProps> {
  private variant = (): string => {
    const vals = [
      "Primary",
      "Secondary",
      "Success",
      "Danger",
      "Warning",
      "Info",
      "Light",
      "Dark",
    ];
    return vals[this.props.id.charCodeAt(0) % vals.length];
  };

  render() {
    return (
      <Card
        bg={this.variant().toLowerCase()}
        text={this.variant().toLowerCase() === "light" ? "dark" : "white"}
      >
        {this.props.children}
      </Card>
    );
  }
}

interface StylishCardProps {
  id: string;
}
