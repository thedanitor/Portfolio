import React from "react";

function About() {
  return (
    <div>
      <div id="about" className="container">
          <div className="row">
        <div className="column is-6">
          <div className="card">
            <div className="card-content">
              <hr />
              <div className="clearfix">
                <img
                  className="photo"
                  src="./"
                  data-still="../public/images/Dan_Clipper_twoFirst.gif"
                  data-animate="../public/images/Dan_Clipper_rev.gif"
                  data-state="still"
                  alt="Dan Weikart on a boat"
                />
                <section className="AboutMeText">
                  <p>
                    Hello. I am an analytical chemist who is looking to become a
                    web developer. My current career requires me to employ my
                    critial thinking, troubleshooting, and problem-solving
                    abilities constantly. But I am searching for something that
                    will encourage me to utilize my creative side as well.
                  </p>
                  <p>
                    I am currently enrolled in University of Washington's Coding
                    Bootcamp for full-stack web development. I have learned so
                    much in the past few months and I know I have a lot more to
                    learn.
                  </p>
                  <p>
                    My hobbies include hiking, camping, biking, reading, playing
                    and listening to music, cooking, and checking out new
                    breweries. It would be my dream to incorporate these
                    passions into my work.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
