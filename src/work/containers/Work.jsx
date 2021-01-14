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

import img from '../../shared/Statics/hero_test.svg';
import { useTranslation } from 'react-i18next';
/* const proyectos = [
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
] */
//debugger
// eslint-disable-next-line brace-style
const Work = () => {
  const { t } = useTranslation();
  const proyectos = [
    {
      cliente: t( "modalProyectos:1:cliente" ),
      tipo: t( "modalProyectos:1:tipo" ),
      modalidad: t( "modalProyectos:1:modalidad" ),
      descripcion: t( "modalProyectos:1:descripcion" )
    },
    {
      titulo: t( "modalProyectos:2:titulo" ),
      cliente: t( "modalProyectos:2:cliente" ),
      tipo: t( "modalProyectos:2:tipo" ),
      modalidad: t( "modalProyectos:2:modalidad" ),
      descripcion: t( "modalProyectos:2:descripcion" )
    },
    {
      cliente: t( "modalProyectos:3:cliente" ),
      tipo: t( "modalProyectos:3:tipo" ),
      modalidad: t( "modalProyectos:3:modalidad" ),
      descripcion: t( "modalProyectos:3:descripcion" )
    },
    {
      cliente: t( "modalProyectos:4:cliente" ),
      tipo: t( "modalProyectos:4:tipo" ),
      modalidad: t( "modalProyectos:4:modalidad" ),
      descripcion: t( "modalProyectos:4:descripcion" )
    }
  ]
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
