import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { SettingComponent } from "./SettingComponent";
import { GithubIcon, LinkedinIcon } from "./ui";
import { Setting } from "../model";

export const Footer: React.SFC<FooterProps> = ({ setting, updateSetting }) => (
  <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Navbar.Brand>Links</Navbar.Brand>
      <Nav.Link href="https://www.linkedin.com/in/notabhijeet" target="_blank">
        <LinkedinIcon />
      </Nav.Link>
      <Nav.Link href="https://github.com/abhijeetsrivastava" target="_blank">
        <GithubIcon />
      </Nav.Link>
    </Nav>
    <SettingComponent setting={setting} updateSetting={updateSetting} />
  </Navbar>
);

interface FooterProps {
  setting: Setting;
  updateSetting: (setting: Setting) => void;
}
