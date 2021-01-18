import React, { memo } from 'react'
import './styles/ProjectsModal.scss'
import Slider from "react-slick";
import frontMe from '../../shared/Statics/frontal-min.png'
import PropTypes from 'prop-types';
// eslint-disable-next-line brace-style
const ProjectsModal = ( { title, images, tipoDeDesarrollo, modalidad, cliente } ) => {
  console.log("renderizando el modal: " + title, images, tipoDeDesarrollo, modalidad, cliente)
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  }

  return (
    <div className="projectModal row">
      <div className="carrousel col s12 m5">
        <div>
          <h2> Lazy Load</h2>
          <Slider {...settings}>

            <div><img className = "carrousel__img" src={frontMe} alt=""/></div>
            <div><img className = "carrousel__img" src={frontMe} alt=""/></div>
            <div><img className = "carrousel__img" src={frontMe} alt=""/></div>
            <div><img className = "carrousel__img" src={frontMe} alt=""/></div>
            <div><img className = "carrousel__img" src={frontMe} alt=""/></div>
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
        <p className= "projectModal__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolore minus officia, voluptatum qui eaque accusantium quod quisquam debitis sequi accusamus maxime, earum animi magni ipsam eligendi. Nostrum, reiciendis itaque.</p>
      </div>
    </div>
  )
}

ProjectsModal.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  modalidad: PropTypes.oneOf( ["Remoto", "Presencial"] ).isRequired,
  cliente: PropTypes.string,
  tipoDeDesarrollo: PropTypes.string.isRequired
}
export default memo( ProjectsModal );
