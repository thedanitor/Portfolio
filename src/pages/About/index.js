import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";
import danPhotoStill from "../../assets/images/Dan_Clipper_twoFirst.gif";
import danPhotoAnimate from "../../assets/images/Dan_Clipper_rev.gif";

function About() {
  const handleStill = e => (e.currentTarget.src = danPhotoStill);
  const handleAnimate = e => (e.currentTarget.src = danPhotoAnimate);

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
                    Chemist turned web developer has the formula to
                    synthesize analytical experience and problem-solving
                    abilities with creative technical solutions. Analytical
                    chemistry requires me to employ my critical thinking,
                    troubleshooting, and problem-solving abilities constantly. I
                    have turned my attention to web development because it not
                    only requires these skills, but encourages creativity as
                    well.
                  </p>
                  <p>
                    Recent graduate of University of Washington's coding
                    bootcamp for full-stack web development. I have learned so
                    much since I started the course and I am improving and
                    learning more everyday.
                  </p>
                  <p>
                    My hobbies include hiking, camping, biking, reading, playing
                    and listening to music, cooking, and checking out new
                    breweries. Causes I am dedicated to are social justice,
                    sustainability, and climate change. It would be my dream to
                    incorporate any of these passions into my work.
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
