import React, {useState} from "react";
import { Modal, Button, Card } from "react-bootstrap";
import styled from "styled-components";

const StyledModal = styled.div`
  background-image: linear-gradient(
    #000000,
    #080d0d,
    #0f1a1a,
    #172727,
    #1e3434,
    #264141,
    #2d4e4e,
    #355b5b,
    #3d6767,
    #447474
  );
`;

function PortfolioModal({
  name,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
  handleClose,
  show,
}) 
{

const [isHover, setIsHover] = useState(false);



  function btnHover(e) {
    e.target.style.backgroundColor = '#ffffff';
    e.target.style.borderColor = "#777777";
    e.target.style.color = "#2d882d"
  }
  


  return (
    <Modal
      size="lg"
      centered
      className="modal fade"
      show={show}
      onHide={handleClose}
    >
      <StyledModal>
        <Modal.Header closeButton>
          <Modal.Title style={modalTitleStyle}>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <img className="card-img" src={imageLarge} alt={name} />
          </Card>
        </Modal.Body>
        <Modal.Footer
          className="d-flex justify-content-center"
          style={modalFooterStyle}
        >
          <h2>{tech}</h2>
          <h3>{description}</h3>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            style={btnStyle}
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={btnHover}
          >
            View Website
          </Button>
          <Button
            style={btnStyle}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={btnHover}
          >
            GIthub Repository
          </Button>
        </Modal.Footer>
      </StyledModal>
    </Modal>
  );
}

const btnStyle = {
  backgroundColor: "#2d882d",
  borderColor: "#2d882d",
  color: "#ffffff",
};

const modalTitleStyle = {
  color: "#2d882d",
  fontWeight: "bold",
};

const modalFooterStyle = {
  color: "black",
  fontWeight: "bold",
};

export default PortfolioModal;
