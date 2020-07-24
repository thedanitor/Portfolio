import React from 'react'

function Project({name, image, imageLarge, tech, description, webUrl, githubUrl}) {
    return (
        <div className="imgContainer col-lg-6">
                  <img
                    id="aqir"
                    src={image}
                    className="img fluid float-left"
                    alt="AQIR Website"
                  />
                  <div className="overlay">
                    <div className="text">{name}</div>
                    <button
                      type="submit"
                      className="portfoliobtn btn btn-secondary btn-lg"
                      data-toggle="modal"
                      data-target="#aqirModal"
                    >
                      Explore
                    </button>
                  </div>
                </div>
    )
}

export default Project;