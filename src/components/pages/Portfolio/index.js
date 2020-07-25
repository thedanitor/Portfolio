import React from 'react'
import Project from "../../Project";
import portfolioList from "../../../utils/portfolioList";
import {
  Container,
  Row,
  Col,
  Card,

} from "react-bootstrap";

function Portfolio() {
    return (
        <Container id="portfolio" className="container">
      <Row className="row">
        <Col className="col-lg-12">
          <Card className="card">
            <div className="card-body">
              <div>
                <h1 className="heading">Portfolio</h1>
              </div>
              <hr />
              <Row className="row">
                  {
                  portfolioList.map((proj, index) => {
                      return <Project
                        name={proj.name}
                        image={proj.image}
                        imageLarge={proj.imageLarge}
                        tech={proj.tech}
                        description={proj.description}
                        webUrl={proj.webUrl}
                        githubUrl={proj.githubUrl}
                        key={index}
                      />
                  })
                  }
                  

              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>

    )
}

export default Portfolio;