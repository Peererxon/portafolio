import React, { memo, useEffect } from 'react'
import './styles/ProjectsModal.scss'
import Slider from "react-slick";
import frontMe from '../../shared/Statics/frontal-min.png'
// eslint-disable-next-line brace-style
const ProjectsModal = ( { title, images, tipoDeDesarrollo, modalidad, cliente } ) => {
  console.log("renderizando el modal")
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  }
  // eslint-disable-next-line brace-style
/*   useEffect( () => {
    //materializeEffect
     const elem = document.querySelector('.carousel');
    const instance = M.Carousel.init( elem, { fullWidth:true } );
    const instanceCarrousel = M.Carousel.getInstance(elem);
    // eslint-disable-next-line brace-style
    var elems = document.querySelector('.carousel');
    var instances = M.Carousel.init(elems, {fullWidth:true,indicators:true});
    return () => {
      //destruyendo instancia para evitar problemas de caché
      //instanceCarrousel.destroy()
    }
  }, [] ) */

  useEffect( () => {

    return () => {

    }
  }, [])
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
        <p className= "projectModal__p"> <strong>cliente:</strong> {cliente} </p>
        <p className= "projectModal__p"> <strong>Modalida:</strong> {modalidad} </p>
        <a className= "btn" >
          view demo
        </a>
        <p className= "projectModal__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dolore minus officia, voluptatum qui eaque accusantium quod quisquam debitis sequi accusamus maxime, earum animi magni ipsam eligendi. Nostrum, reiciendis itaque.</p>
      </div>
    </div>
  )
}

export default memo( ProjectsModal );
