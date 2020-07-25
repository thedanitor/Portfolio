import React, { useState } from "react";
import { Col, Container, Button } from "react-bootstrap";
import ProjectModal from "./ProjectModal";

function Project({
  name,
  image,
  imageLarge,
  tech,
  description,
  webUrl,
  githubUrl,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Col md={{ span: 6 }} className="imgContainer" style={imgContainerStyle}>
        <img
          id="aqir"
          src={image}
          className="img fluid float-left"
          alt={name}
          style={imgStyle}
        />
        <div className="overlay" style={overlayStyle}>
          <div className="text" sylte={overlayTextStyle}>
            {name}
          </div>
          <Button
            style={projectBtnStyle}
            type="submit"
            // className="portfoliobtn btn btn-secondary btn-lg"
            // data-toggle="modal"
            // data-target="#aqirModal"
            onClick={handleShow}
          >
            Explore
          </Button>
        </div>
      </Col>
      <ProjectModal
        name={name}
        imageLarge={imageLarge}
        tech={tech}
        description={description}
        webUrl={webUrl}
        githubUrl={githubUrl}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </Container>
  );
}

const imgContainerStyle = {
  position: "relative",
  opacity: 1,
  padding: "20px",
};

const imgStyle = {
  // width: "50%",
  opacity: 1,
  display: "block",
  width: "100%",
  height: "auto",
  border: "solid black",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  opacity: 1,
  transition: "all 500ms ease-in-out",
  // -webkit-transition: "all 500ms ease-in-out",
  // -moz-transition: "all 500ms ease-in-out",
  // -o-transition: "all 500ms ease-in-out",
  // -ms-transition: "all 500ms ease-in-out",
  zIndex: 2,
};

const overlayTextStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    position: "absolute",
    width: "70%",
    top: "10%",
    left: "15%",
    textAlign: "center"
}

const projectBtnStyle = {
  backgroundColor: "#2d882d",
  borderColor: "#2d882d",
  color: "#ffffff",
  position: "absolute",
  top: "60%",
  left: "50%",
  textAlign: "center",
};

export default Project;
