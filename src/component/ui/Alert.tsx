import React, { useEffect } from "react";
import { Alert as BootStrapAlert } from "react-bootstrap";

export const Alert: React.SFC<AlertProps> = ({
  clearMessage,
  show,
  created,
}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      clearMessage();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [clearMessage]);

  const header = created ? "New List Created" : "List Deleted!!";
  const p = created
    ? "List has been created, add todo items!!"
    : "List has been deleted, fewer lists to worry about!!";

  return (
    <BootStrapAlert show={show} variant={created ? "success" : "danger"}>
      <BootStrapAlert.Heading>{header}</BootStrapAlert.Heading>
      <p>{p}</p>
    </BootStrapAlert>
  );
};

interface AlertProps {
  show: boolean;
  created: boolean;
  clearMessage: () => void;
}
