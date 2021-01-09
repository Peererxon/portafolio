import React from 'react'
import ProjectCard  from '../components/ProjectCard';
import Projects from './Projects';
import {
  faReact,
  faAngular,
  faAndroid,
  faJs,
  faBootstrap,
  faDocker,
  faSass,
  faHtml5,
  faCss3Alt
} from '@fortawesome/free-brands-svg-icons';

import img from '../../shared/Statics/frontal-min.png';
const proyectos = [
  {
    titulo: "prueba de titulos",
    descripcion: "descripcionPrueba",
    imagenPrincipal: img
  },
  {
    titulo: "prueba de titulos2",
    descripcion: "descripcionPrueba2",
    imagenPrincipal: img
  },
  {
    titulo: "prueba de titulos3",
    descripcion: "descripcionPrueba3",
    imagenPrincipal: img
  },
]
//debugger
// eslint-disable-next-line brace-style
const Work = () => {
  return (
    <Projects>
      {
        proyectos.map(
          ( { titulo, descripcion, imagenPrincipal }, index ) =>
          {
            return (
              <div key={index}>

                <ProjectCard
                  key={index}
                  title={titulo}
                  description={descripcion}
                  imagen={<img src={imagenPrincipal} alt="imagen presentacional de proyecto realizado" title="click para ver mas sobre el proyecto" />}
                />

                <div id={"proyecto" + index} className="modal">
                  <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                  </div>
                  <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                  </div>
                </div>
              </div>
            )
          }
        )
      }
      {/* <ProjectCard title={"holis"} imagen={<img src={img} alt="imagen presentacional de proyecto realizado" title="click para ver mas sobre el proyecto" />} /> */}
    </Projects>
  )
}

export default Work;
