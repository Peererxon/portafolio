import React, { memo } from 'react'
import './styles/ProjectsModal.scss'
import Slider from "react-slick";
import PropTypes from 'prop-types';
// eslint-disable-next-line brace-style
const ProjectsModal = ( { title, images, tipoDeDesarrollo, modalidad, cliente, descripcion, url = "", demo } ) => {
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
      <h3 className="projectModal__h3"> {title}</h3>
      <div className = "col s12 m5">
        <div className = "carrousel">
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
          <p className= "projectModal__p"> <strong>Cliente:</strong> {cliente} </p> : null
        }
        { modalidad ?
          <p className= "projectModal__p"> <strong>Modalida:</strong> {modalidad} </p> : null 
        }
        { url.length > 0 ?
          demo ?
            <a className= "btn btn--blue" href={url} target="_blank" rel="noopener noreferrer">
            view demo
            </a> :
            <a className= "btn btn--orange" href={url} target="_blank" rel="noopener noreferrer" >
            view repo
            </a>
          // eslint-disable-next-line operator-linebreak
          : null
          //si no hay url no mostramos nada
        }
        <p className= "projectModal__p"> {descripcion} </p>
      </div>
    </div>
  )
}

ProjectsModal.propTypes = {
  title: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  images: PropTypes.array,
  modalidad: PropTypes.oneOf( ["Remoto", "Presencial", "Semi presencial"] ).isRequired,
  cliente: PropTypes.string,
  tipoDeDesarrollo: PropTypes.string.isRequired,
  demo: PropTypes.bool.isRequired,
  url: PropTypes.string
}
export default memo( ProjectsModal );
