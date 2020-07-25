import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import linkList from "../utils/linkList";
import Contact from "../Contact";

function Footer() {
  return (
    <footer id="contact" className="page-footer font-small">
      <div className="container">
        <div className="footer-copyright text-center py-3">
          <h2>Contact</h2>
          {/* {linkList.map((link, index) => { */}
            {/* return ( */}
              <Contact
                // url={link.url}
                // iconName={link.iconName}
                // iconType={link.iconType}
                // name={link.name}
                // color={link.color}
                // key={index}
              />
            {/* ); */}
          {/* })} */}
          {/* <FontAwesomeIcon icon={["fas", "envelope-open-text"]}/>
            <FontAwesomeIcon icon={["fas", "file-pdf"]}/>
            <FontAwesomeIcon icon={["fab","github"]}/>
            <FontAwesomeIcon icon={["fab", "linkedin"]}/> */}

          {/* <a href="mailto: danmweikart@gmail.com" target="_blank"
              >
                  <FontAwesomeIcon icon="envelope-open-text"/>
                  <i
                className="fas fa-envelope-open-text"
                data-toggle="tooltip"
                data-placement="top"
                title="Email"
              >
                  </i>
                  </a>
            <a href="https://github.com/thedanitor" target="_blank"
              ><i
                className="fab fa-github"
                data-toggle="tooltip"
                data-placement="top"
                title="Github"
              ></i
            ></a>
            <a
              href="https://www.linkedin.com/in/dan-weikart-64702a1a3/"
              target="_blank"
              ><i
                className="fab fa-linkedin"
                data-toggle="tooltip"
                data-placement="top"
                title="linkedIn"
              ></i
            ></a>
            <a
              href="assets/images/Dan_Weikart_Resume_6-25-2020.pdf"
              target="_blank"
            >
              <i
                className="far fa-file-pdf"
                data-toggle="tooltip"
                data-placement="top"
                title="Resume"
              ></i>
            </a> */}
          <p>© 2020 Copyright: Dan Weikart</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
