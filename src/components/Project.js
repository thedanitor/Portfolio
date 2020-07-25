import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectModal from "./ProjectModal";
import styled from "styled-components";

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

  
const overlayTextStyle = {
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
    position: "absolute",
    paddingTop: "50%",
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


const StyledOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
width: 100%;
opacity: 0;
transition: all 500ms ease-in-out;
-webkit-transition: all 500ms ease-in-out;
-moz-transition: all 500ms ease-in-out;
-o-transition: all 500ms ease-in-out;
-ms-transition: all 500ms ease-in-out;
z-index: 2;
`

const StyledButton = styled.button`
position: absolute;
top: 60%;
left: 50%;
text-align: center;
-webkit-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
background-color: #2d882d;
  border-color: #2d882d;
  color: #ffffff;
  :hover {
    background-color: #ffffff;
    border-color: #777777;
    color: #2d882d;
  }
`

const StyledImgContainer = styled.div`
:hover .overlay {
    opacity: 1;
    transition-delay: 0s;
    transition-duration: 500ms;
  }

  :hover .text {
    opacity: 1;
    font-size: 25px;
    transition-delay: 0s;
    transition-duration: 500ms;
    top: 35%;
    left: 15%;
  }

  :hover .portfoliobtn {
    opacity: 1;
    transition-delay: 0s;
    transition-duration: 500ms;
  }

  :hover .img {
    opacity: 0.2;
  }
`


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
        <Row>
      <Col md={{ span: 6 }}>
          <StyledImgContainer  className="imgContainer" style={imgContainerStyle}>
        <img
          id={name}
          src={image}
          className="img fluid float-left"
          alt={name}
          style={imgStyle}
        />
        <StyledOverlay className="overlay" 
        // style={overlayStyle}
        >
          <div className="text" style={overlayTextStyle}>
            {name}
          </div>
          <StyledButton
            style={projectBtnStyle}
            type="submit"
            className="portfoliobtn btn btn-secondary btn-lg"
            // data-toggle="modal"
            // data-target="#aqirModal"
            onClick={handleShow}
          >
            Explore
          </StyledButton>
        </StyledOverlay>
        </StyledImgContainer>
      </Col>
      </Row>
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



// const overlayStyle = {
//   position: "absolute",
//   top: 0,
//   bottom: 0,
//   left: 0,
//   right: 0,
//   height: "100%",
//   width: "100%",
//   opacity: 1,
//   transition: "all 500ms ease-in-out",
//   // -webkit-transition: "all 500ms ease-in-out",
//   // -moz-transition: "all 500ms ease-in-out",
//   // -o-transition: "all 500ms ease-in-out",
//   // -ms-transition: "all 500ms ease-in-out",
//   zIndex: 2,
// };

export default Project;
