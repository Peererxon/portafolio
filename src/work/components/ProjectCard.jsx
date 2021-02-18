import React from 'react';
import PropTypes from 'prop-types';
import './styles/ProjectCard.scss';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line brace-style
const ProjectCard = ( { title, imagen, description, handleClick } ) => {
  const { t } = useTranslation()
  return (
    <div className="project-item">
      <div className="col s12 m6 l4">
        <div className="card hoverable">

          <div className="card-image" onClick={() => handleClick( title, description )}>
            {/* Definitely this is an awful bad practice, i did it becouse i don´t have a backend for now that send me a decently images url */}
            {imagen}
            <span className="card-title">
              { t( "proyectos:card:verMas" ) }
              {/* <span>icono</span> */}
            </span>
          </div>

          <div className="card-content">
            <p className="card-content__p">
              { title + " " + description ||
              "I am a very simple card."}
            </p>
          </div>

        </div>{/*EndCard  */}
      </div>
    </div>

  )

}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default ProjectCard ;
