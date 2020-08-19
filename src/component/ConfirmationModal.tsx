import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const ConfirmationModal: React.SFC<ConfirmationModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => {
  let location = useLocation();
  const message = location.pathname.includes("important")
    ? "Are you sure you want to delete this list? It might contain some non-important items which are not visible"
    : "Are you sure you want to delete the list?";

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete List</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  show: boolean;
}
