import React, { useEffect } from "react";
import { Alert as BootStrapAlert } from "react-bootstrap";

export const Alert: React.SFC<AlertProps> = ({ clearMessage, message }) => {
  const show: boolean = message !== "";
  const created: boolean = message === "created";

  useEffect(() => {
    const intervalId = setInterval(() => {
      clearMessage();
    }, 4000);
    return () => clearInterval(intervalId);
  }, [clearMessage]);

  if (show) {
    if (created) return <CreateAlert show={show} />;
    else return <DeleteAlert show={show} />;
  } else {
    return null;
  }
};

interface AlertProps {
  message: string;
  clearMessage: () => void;
}

const CreateAlert: React.SFC<CreateOrDeleteProps> = ({ show }) => (
  <BootStrapAlert show={show} variant="success">
    <BootStrapAlert.Heading>New List Created </BootStrapAlert.Heading>
    <p>List has been created, add todo items!!</p>
  </BootStrapAlert>
);

const DeleteAlert: React.SFC<CreateOrDeleteProps> = ({ show }) => (
  <BootStrapAlert show={show} variant="danger">
    <BootStrapAlert.Heading>List Deleted!! </BootStrapAlert.Heading>
    <p>List has been deleted, fewer lists to worry about!!</p>
  </BootStrapAlert>
);

interface CreateOrDeleteProps {
  show: boolean;
}
