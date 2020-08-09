import React from "react";
import { Button as BootStrapButton } from "react-bootstrap";

interface ButtonProps {
  title?: string;
  onClick: () => void;
  disabled: boolean;
}

export const Button: React.SFC<ButtonProps> = ({
  disabled,
  title,
  onClick,
}) => (
  <BootStrapButton disabled={disabled} variant="primary" onClick={onClick}>
    {title}
  </BootStrapButton>
);

Button.defaultProps = {
  title: "Submit",
};
