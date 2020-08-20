import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";

import { StarFillIcon, SettingIcon, CheckBoxIcon } from "./ui";
import { SortingBy, Setting, createSetting } from "../model";

export const SettingComponent: React.SFC<SettingComponentProps> = ({
  setting,
  updateSetting,
}) => {
  const onSelectHandler = (selectedKey: string | null) => {
    if (selectedKey === "none") updateSetting(createSetting(SortingBy.none));
    else if (selectedKey === "important")
      updateSetting(createSetting(SortingBy.important));
    else updateSetting(createSetting(SortingBy.unchecked));
  };

  return (
    <Nav fill={false} onSelect={onSelectHandler}>
      <NavDropdown
        title={
          <div style={{ display: "inline-block" }}>
            Sort By <SettingIcon />
          </div>
        }
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item eventKey={SortingBy[SortingBy.none]}>
          None
        </NavDropdown.Item>
        <NavDropdown.Item eventKey={SortingBy[SortingBy.important]}>
          <StarFillIcon />
        </NavDropdown.Item>
        <NavDropdown.Item eventKey={SortingBy[SortingBy.unchecked]}>
          <CheckBoxIcon />
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

interface SettingComponentProps {
  setting: Setting;
  updateSetting: (setting: Setting) => void;
}
