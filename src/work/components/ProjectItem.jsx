import React from 'react';
import PropTypes from 'prop-types';
import img from '../../shared/Statics/correo.png'
// eslint-disable-next-line brace-style
export const ProjectItem = ( { title, src } ) => {
  console.log("locacion"+process.env.PUBLIC_URL)
  return (
    <div className="project-item">
      <div className="col s3">
        <div className="card">

          <div className="card-image">
            <img src={img} alt="proyectos"/>
            <span className="card-title">Card Title</span>
          </div>

          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
          </div>

        </div>{/*EndCard  */}
      </div>
    </div>

  )

}

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
}
