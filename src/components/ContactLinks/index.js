import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../../assets/images/Dan_Weikart_Resume_6-25-2020.pdf";

function ContactLinks() {

  return (
    <div>
      <a href="mailto: danmweikart@gmail.com">
        <FontAwesomeIcon className="iconLink" icon="envelope-open-text"/>
      </a>
      <a
        href="https://github.com/thedanitor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="iconLink" icon={["fab", "github"]}/>
      </a>
      <a
        href="https://www.linkedin.com/in/dan-weikart/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="iconLink" icon={["fab", "linkedin"]}/>
      </a>
      <a href={resume}>
        <FontAwesomeIcon className="iconLink" icon="file-pdf"/>
      </a>
    </div>
  );
}

export default ContactLinks;
