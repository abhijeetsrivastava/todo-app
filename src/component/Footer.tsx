import React from "react";
import { Navbar, Container } from "react-bootstrap";

import { SettingComponent } from "./SettingComponent";
import { Setting } from "../model";

export const Footer: React.SFC<FooterProps> = ({ setting, updateSetting }) => (
  <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Footer</Navbar.Brand>
    </Container>
    <SettingComponent setting={setting} updateSetting={updateSetting} />
  </Navbar>
);

interface FooterProps {
  setting: Setting;
  updateSetting: (setting: Setting) => void;
}
