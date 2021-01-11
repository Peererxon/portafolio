import React, { memo, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

// eslint-disable-next-line brace-style
const ProjectsModal = ( { title, images, tipoDeDesarrollo, modalidad, cliente } ) => {
  console.log("renderizando el modal")
  // eslint-disable-next-line brace-style
  useEffect( () => {
    const elem = document.querySelectorAll('.carousel');
    console.log(elem)
    const instances = M.Carousel.init( elem, { fullWidth:true } );
    console.log(instances[0])
    const instanceCarrousel = M.Carousel.getInstance(instances[0]);
    // eslint-disable-next-line brace-style
    return () => console.log(instanceCarrousel)
  }, [] )
  return (
    <div className="projectModal">
      <div className="carousel carousel-slider carousel-slider--halfWidth">
        <a className="carousel-item" href="#one!"><img src="https://curadas.com/es/wp-content/uploads/2020/07/1200x600.png"/></a>
        <a className="carousel-item" href="#two!"><img src="https://curadas.com/es/wp-content/uploads/2020/07/1200x600.png"/></a>
        <a className="carousel-item" href="#three!"><img src="https://curadas.com/es/wp-content/uploads/2020/07/1200x600.png"/></a>
        <a className="carousel-item" href="#four!"><img src="https://curadas.com/es/wp-content/uploads/2020/07/1200x600.png"/></a>
        <a className="carousel-item" href="#five!"><img src="https://curadas.com/es/wp-content/uploads/2020/07/1200x600.png"/></a>
      </div>
      <div className="projectModal__body">
        <p> <strong>Categoria:</strong> {tipoDeDesarrollo} </p>
        <p> <strong>cliente:</strong> {cliente} </p>
        <p> <strong>Modalida:</strong> {modalidad} </p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>
  )
}

export default memo( ProjectsModal );
