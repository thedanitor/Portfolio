import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/images/Dan_Weikart_Resume_6-25-2020.pdf";

function Contact() {

  return (
    <div>
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
