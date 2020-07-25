import React from "react";
import "./style.css";
import ContactLinks from "../../ContactLinks";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <footer id="contact" className="page-footer font-small">
      <Container>
        <div className="footer-copyright text-center py-3">
          <h2>Contact</h2>
              <ContactLinks />
           <p>© 2020 Copyright: Dan Weikart</p>
        </div>
      </Container>
    </footer>
  );
}

export default Contact;
