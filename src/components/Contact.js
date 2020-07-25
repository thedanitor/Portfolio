import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/images/Dan_Weikart_Resume_6-25-2020.pdf";
import styled from "styled-components";

// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 32px;
  color: white;
  -webkit-transition: -webkit-transform 300ms ease-in;
  transition: transform 300ms ease-in;

  :hover {
    color: #ed1212;
    cursor: pointer;
    
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
`;

function Contact() {

  return (
    <div>
        <StyledButton>Check it out</StyledButton>

      <a href="mailto: danmweikart@gmail.com">
        <FontAwesomeIcon icon="envelope-open-text" style={emailStyle} />
      </a>
      <a
        href="https://github.com/thedanitor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "github"]} style={githubStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/dan-weikart/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} style={linkedInStyle} />
      </a>
      <a href={resume}>
        <FontAwesomeIcon icon="file-pdf" style={resumeStyle} />
      </a>
    </div>
  );
}

const emailStyle = {
  color: "#3e5de8",
  fontSize: "40px",
  paddingRight: "10px",
};

const githubStyle = {
  color: "gray",
  fontSize: "40px",
  paddingRight: "10px",
};

const linkedInStyle = {
  color: "#0077b5",
  fontSize: "40px",
  paddingRight: "10px",
};

const resumeStyle = {
  color: "#e81b0a",
  fontSize: "40px",
  paddingRight: "10px",
};

export default Contact;
