import React from "react";
import { Modal, Button } from "react-bootstrap";

function PortfolioModal({
  name,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
  handleClose,
  show,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imageLarge} alt={name} />
      </Modal.Body>
      <Modal.Footer>
        <h2>{tech}</h2>
        <h3>{description}</h3>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={webUrl}>
          View Website
        </Button>
        <Button variant="primary" onClick={githubUrl}>
          GIthub Repository
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PortfolioModal;
