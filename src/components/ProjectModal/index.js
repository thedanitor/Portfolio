import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import "./style.css";

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
    <Modal
      size="md"
      centered
      className="modal fade modal-content"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <img className="card-img" src={imageLarge} alt={name} />
        </Card>
      </Modal.Body>
      <Modal.Footer className="modal-footer d-flex justify-content-center">
        <h2>{tech}</h2>
        <h3>{description}</h3>
        <Button className="btn" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          View Website
        </Button>
        <Button
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          GIthub Repository
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// const btnStyle = {
//   backgroundColor: "#2d882d",
//   borderColor: "#2d882d",
//   color: "#ffffff",
// };

// const modalTitleStyle = {
//   color: "#2d882d",
//   fontWeight: "bold",
// };

// const modalFooterStyle = {
//   color: "black",
//   fontWeight: "bold",
// };

export default PortfolioModal;
