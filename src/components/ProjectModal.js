import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

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
       <Modal size="lg" centered className="modal fade" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={modalTitleStyle}>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
        <img className="card-img" src={imageLarge} alt={name} />
        </Card>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center" style={modalFooterStyle}>
        <h2>{tech}</h2>
        <h3>{description}</h3>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button style={btnStyle} href={webUrl} target="_blank" rel="noopener noreferrer">
          View Website
        </Button>
        <Button style={btnStyle} href={githubUrl} target="_blank" rel="noopener noreferrer">
          GIthub Repository
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const btnStyle = {
  backgroundColor: "#2d882d",
  borderColor: "#2d882d",
  color: "#ffffff",
}

const modalTitleStyle = {
  color: "#2d882d",
  fontWeight: "bold",
}

const modalFooterStyle = {
  color: "black",
  fontWeight: "bold",
}

export default PortfolioModal;
