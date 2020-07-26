import React from "react";
import {Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";
import danPhotoStill from "../../../assets/images/Dan_Clipper_twoFirst.gif";
import danPhotoAnimate from "../../../assets/images/Dan_Clipper_rev.gif"

function About() {

  const handleStill = (e) => e.currentTarget.src = danPhotoStill
  const handleAnimate = (e) => e.currentTarget.src = danPhotoAnimate

  return (
 
      <Container id="about" className="container">
        <Row className="row">
          <Col className="column is-6">
            <Card className="card">
              <div className="card-content">
                <hr />
                <div className="clearfix">
                  <img
                    className="photo"
                    src={danPhotoStill}
                    onMouseEnter={handleAnimate}
                    onMouseLeave={handleStill}
                    alt="Dan Weikart on a boat"
                  />
                  <section className="AboutMeText">
                    <p>
                      Hello. I am an analytical chemist who is looking to become
                      a web developer. My current career requires me to employ
                      my critial thinking, troubleshooting, and problem-solving
                      abilities constantly. But I am searching for something
                      that will encourage me to utilize my creative side as
                      well.
                    </p>
                    <p>
                      I am currently enrolled in University of Washington's
                      Coding Bootcamp for full-stack web development. I have
                      learned so much in the past few months and I know I have a
                      lot more to learn.
                    </p>
                    <p>
                      My hobbies include hiking, camping, biking, reading,
                      playing and listening to music, cooking, and checking out
                      new breweries. It would be my dream to incorporate these
                      passions into my work.
                    </p>
                  </section>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

  );
}

export default About;
