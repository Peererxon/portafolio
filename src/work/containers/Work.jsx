import React, { useCallback } from 'react'
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

import imagenPIonicCadif1 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_7_Marcado.png'
import { useTranslation } from 'react-i18next';

import { actions as ModalActions } from 'react-redux-modal-flex';
import ModalProject from '../components/ProjectsModal';
import { useDispatch } from 'react-redux';
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
      titulo: t( "modalProyectos:4:titulo" ),
      descripcion: t( "modalProyectos:4:descripcion" ),
      imagenPrincipal: imagenPIonicCadif1
    }
  ]
  //                            Modal

  //saca información desde el store
  //usa un dispatch del store
  const dispatch = useDispatch()
  const toggleModalProject =
    ( component, text, action = null ) =>
      (
        ModalActions.toggleModal( {
          component: () => component,
          ok: {
            text,
            action: () => action
          }

        } )
      )
  const handleCardClick = ( title ) =>
  {
    switch ( title )
    {
      case "Tienda Virtual,proyecto final académico":
        dispatch( toggleModalProject( <ModalProject title={title} images={[imagenPIonicCadif1, imagenPIonicCadif1]} /> ) )
        break;

      default:
        break;
    }
  }
  //estaba asi en la doc, es para prevenir renders innecesarios
  //                          END Modal
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
                  handleClick= {handleCardClick}
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
