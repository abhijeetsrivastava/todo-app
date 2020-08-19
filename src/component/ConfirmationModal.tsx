import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ConfirmationModal: React.SFC<ConfirmationModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => (
  <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Delete List</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to delete list?</Modal.Body>
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

interface ConfirmationModalProps {
  onClose: () => void;
  onConfirm: () => void;
  show: boolean;
}
