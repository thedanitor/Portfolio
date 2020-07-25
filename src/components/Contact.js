import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact({ iconName, url, iconType, name }) {
  return (
    <div>
      <a href={url}>
        <FontAwesomeIcon icon={["fab", { iconName }]} />
      </a>
    </div>
  );
}

export default Contact;
