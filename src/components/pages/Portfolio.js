import React from 'react'
import Project from "../Project";
import portfolioList from "../../utils/portfolioList"

function Portfolio() {
    return (
        <div id="portfolio" className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div>
                <h1 className="heading">Portfolio</h1>
              </div>
              <hr />
              <div className="row">
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
                  

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Portfolio;