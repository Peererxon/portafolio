import React, { memo } from 'react'
import './styles/ProjectsModal.scss'
import Slider from "react-slick";
import PropTypes from 'prop-types';
// eslint-disable-next-line brace-style
const ProjectsModal = ( { title, images, tipoDeDesarrollo, modalidad, cliente,descripcion } ) => {
  console.log("renderizando el modal: " + title, images, tipoDeDesarrollo, modalidad, cliente)
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  }

  return (
    <div className="projectModal row">
      <div className="carrousel col s12 m5">
        <div>
          <h2> {title}</h2>
          <Slider {...settings}>
            {
              images.map( ( image, index ) =>
                (
                  <div key={index}><img className = "carrousel__img" src={image} alt=""/></div>
                )
              )
            }
          </Slider>
        </div>
      </div>
      <div className= "col s12 m7 projectModal__body">
        <p className= "projectModal__p"> <strong>Categoria:</strong> {tipoDeDesarrollo} </p>
        { cliente ?
          <p className= "projectModal__p"> <strong>cliente:</strong> {cliente} </p> : null
        }
        {modalidad ?
          <p className= "projectModal__p"> <strong>Modalida:</strong> {modalidad} </p> : null 
        }
        <a className= "btn" >
          view demo
        </a>
        <p className= "projectModal__p"> {descripcion} </p>
      </div>
    </div>
  )
}

ProjectsModal.propTypes = {
  title: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  images: PropTypes.array,
  modalidad: PropTypes.oneOf( ["Remoto", "Presencial"] ).isRequired,
  cliente: PropTypes.string,
  tipoDeDesarrollo: PropTypes.string.isRequired
}
export default memo( ProjectsModal );
