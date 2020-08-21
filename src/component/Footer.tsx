import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { SettingComponent } from "./SettingComponent";
import { Setting } from "../model";

export const Footer: React.SFC<FooterProps> = ({ setting, updateSetting }) => (
  <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Navbar.Brand>Footer</Navbar.Brand>
    </Nav>
    <SettingComponent setting={setting} updateSetting={updateSetting} />
  </Navbar>
);

interface FooterProps {
  setting: Setting;
  updateSetting: (setting: Setting) => void;
}
