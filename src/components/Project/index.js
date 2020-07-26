import React, { useState } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import ProjectModal from "../ProjectModal";

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
  
        <div className="imgContainer col-lg-6">
            <img
              id={name}
              src={image}
              className="img fluid float-left"
              alt={name}
            />
            <div className="overlay">
              <div className="text">{name}</div>
              <Button
                type="submit"
                className="portfoliobtn btn btn-secondary btn-lg"
                onClick={handleShow}
              >
                Explore
              </Button>
            </div>

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
        </div>
  );
}

export default Project;
