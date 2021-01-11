import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './styles/ProjectCard.scss';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'

import { actions as ModalActions } from 'react-redux-modal-flex';
import ModalProject from './ProjectsModal';
const {toggleModal, modifyOkModal} = ModalActions;


// eslint-disable-next-line brace-style
const ProjectCard = ( { title, imagen, description } ) => {
  //saca información desde el store
  const modalState = useSelector( state => state.modal )
  //usa un dispatch del store
  const dispatch = useDispatch()

  const toggleModal = useCallback(
    ( component, text, action = null ) =>
      (
        ModalActions.toggleModal( {
          component: () => component,
          ok: {
            text,
            action: () => action
          }

        } )
      ), [dispatch]
    //estaba asi en la doc, es para prevenir renders innecesarios
  )

  const handleClick = ( component, text, action ) =>
  {
    console.log(component)
    dispatch( toggleModal( component, text, action ) )
  }

  return (
    <div className="project-item">
      <div className="col s12 m4 l2">
        <div className="card">

          <div className="card-image" onClick={() => handleClick( <ModalProject />, "holasss" ) }>
            {/* Definitely this is an awful bad practice, i did it becouse i don´t have a backend for now that send me a decently images url */}
            {imagen}
            <span className="card-title">
              Ver mas información
              <span>icono</span>
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
}

export default ProjectCard ;
