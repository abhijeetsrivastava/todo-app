import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

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
    <DropdownButton
      id="dropdown-basic-button"
      variant="default"
      title={<SettingIcon />}
      drop="up"
      onSelect={onSelectHandler}
    >
      <Dropdown.ItemText>Sort By</Dropdown.ItemText>
      <Dropdown.Item
        eventKey={SortingBy[SortingBy.none]}
        active={setting.sortBy === SortingBy[SortingBy.none]}
      >
        None
      </Dropdown.Item>
      <Dropdown.Item
        eventKey={SortingBy[SortingBy.important]}
        active={setting.sortBy === SortingBy[SortingBy.important]}
      >
        <StarFillIcon />
      </Dropdown.Item>
      <Dropdown.Item
        eventKey={SortingBy[SortingBy.unchecked]}
        active={setting.sortBy === SortingBy[SortingBy.unchecked]}
      >
        <CheckBoxIcon />
      </Dropdown.Item>
    </DropdownButton>
  );
};

interface SettingComponentProps {
  setting: Setting;
  updateSetting: (setting: Setting) => void;
}
