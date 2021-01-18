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

// Assets Ionic cadif proyect
import imagenPIonicCadif1 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_7_Marcado.png'
import ionicCadif1carrousel1 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_1_Marcado.png'
import ionicCadif1carrousel2 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_2_Marcado.png'
import ionicCadif1carrousel3 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_3_Marcado.png'
import ionicCadif1carrousel4 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_4_Marcado.png'
import ionicCadif1carrousel5 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_5_Marcado.png'
import ionicCadif1carrousel6 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_6_Marcado.png'

import { useTranslation } from 'react-i18next';

import { actions as ModalActions } from 'react-redux-modal-flex';
import ModalProject from '../components/ProjectsModal';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line brace-style
const Work = () => {
  const { t } = useTranslation();
  const carrouselIonicCadif1 =
    [
      imagenPIonicCadif1,
      ionicCadif1carrousel1,
      ionicCadif1carrousel2,
      ionicCadif1carrousel3,
      ionicCadif1carrousel4,
      ionicCadif1carrousel5,
      ionicCadif1carrousel6
    ]
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
    ( component, text = "Cerrar", action = null ) =>
      (
        ModalActions.toggleModal( {
          component: () => component,
          ok: {
            text,
            action: () => action
          }

        } )
      )
  const handleCardClick = ( title,description ) =>
  {
    switch ( title )
    {
      case "Tienda Virtual,proyecto final académico":
        dispatch( toggleModalProject( <ModalProject title={title} images={carrouselIonicCadif1} descripcion={description} /> ) )
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
