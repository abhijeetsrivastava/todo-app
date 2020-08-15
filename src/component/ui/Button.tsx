import React from "react";
import { Button as BootStrapButton } from "react-bootstrap";

interface ButtonProps {
  title?: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.SFC<ButtonProps> = ({
  disabled,
  title,
  onClick,
  children,
}) => (
  <BootStrapButton disabled={disabled} variant="outline-info" onClick={onClick}>
    {title}
    {children}
  </BootStrapButton>
);

Button.defaultProps = {
  title: "",
  disabled: false,
};
