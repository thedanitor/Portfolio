import React from "react";

function About() {
  return (
    <div>
      <div id="about" classNameName="container">
        <div classNameName="column is-6">
          <div classNameName="card">
            <div classNameName="card-content">
              <hr />
              <div classNameName="clearfix">
                <img
                  classNameName="photo"
                  src="./"
                  data-still="../public/images/Dan_Clipper_twoFirst.gif"
                  data-animate="../public/images/Dan_Clipper_rev.gif"
                  data-state="still"
                  alt="Dan Weikart on a boat"
                />
                <section classNameName="AboutMeText">
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

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Component</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
            <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Save
          </a>
          <a href="#" className="card-footer-item">
            Edit
          </a>
          <a href="#" className="card-footer-item">
            Delete
          </a>
        </footer>
      </div>
    </div>
  );
}

export default About;
