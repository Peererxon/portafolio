import React from 'react'
import ProjectCard from '../components/ProjectCard';
import Projects from './Projects';

// Assets Ionic cadif proyect
import imagenPIonicCadif1 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_7_Marcado.png'
import ionicCadif1carrousel1 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_1_Marcado.png'
import ionicCadif1carrousel2 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_2_Marcado.png'
import ionicCadif1carrousel3 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_3_Marcado.png'
import ionicCadif1carrousel4 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_4_Marcado.png'
import ionicCadif1carrousel5 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_5_Marcado.png'
import ionicCadif1carrousel6 from '../../shared/Statics/trabajos/Ionic_proyectoCAD_6_Marcado.png'

// assets foundussMovil proyect
import imagenPFoundussApp from '../../shared/Statics/trabajos/proyecto_FoundussApp.jpg'
//END

//assets caprofula proyect
import imagenPCaprofula from '../../shared/Statics/trabajos/caprofula_tipoPrestamo.png'
import carprofulacarrousel1 from '../../shared/Statics/trabajos/caprofula_noticias_ejecucion.png'
import carprofulacarrousel2 from '../../shared/Statics/trabajos/caprofula_edicion_informacion.jpg'
import { useTranslation } from 'react-i18next';
//END

//assets invie proyect
import imagenPInvie from '../../shared/Statics/trabajos/invie1.jpeg';
import inviecarrousel1 from '../../shared/Statics/trabajos/invie2.jpeg'
//END

//modal
import { useDispatch } from 'react-redux';
import { openModal } from '../../shared/redux/modal/modalSlice';

// eslint-disable-next-line brace-style
const Work = () => {
  const { t } = useTranslation();
  //the order of this objects are inside of the index.json of the i18 library
  const proyectos = [
    {
      title: t( "modalProyectos:1:titulo" ),
      cliente: t( "modalProyectos:1:cliente" ),
      tipoDeDesarrollo: t( "modalProyectos:1:tipo" ),
      modalidad: t( "modalProyectos:1:modalidad" ),
      descripcion: t( "modalProyectos:1:descripcion" ),
      imagenPrincipal: imagenPFoundussApp
    },
    {
      title: t( "modalProyectos:2:titulo" ),
      cliente: t( "modalProyectos:2:cliente" ),
      tipoDeDesarrollo: t( "modalProyectos:2:tipo" ),
      modalidad: t( "modalProyectos:2:modalidad" ),
      descripcion: t( "modalProyectos:2:descripcion" ),
      imagenPrincipal: imagenPCaprofula
    }, //caprofula
    {
      title: t( "modalProyectos:3:titulo" ),
      cliente: t( "modalProyectos:3:cliente" ),
      tipoDeDesarrollo: t( "modalProyectos:3:tipo" ),
      modalidad: t( "modalProyectos:3:modalidad" ),
      descripcion: t( "modalProyectos:3:descripcion" ),
      imagenPrincipal: imagenPInvie
    }, //invie
    {
      cliente: t( "modalProyectos:4:cliente" ),
      tipoDeDesarrollo: t( "modalProyectos:4:tipo" ),
      modalidad: t( "modalProyectos:4:modalidad" ),
      title: t( "modalProyectos:4:titulo" ),
      descripcion: t( "modalProyectos:4:descripcion" ),
      imagenPrincipal: imagenPIonicCadif1
    }
  ]
  //                            Modal

  //saca información desde el store
  //usa un dispatch del store
  const dispatch = useDispatch()
  const handleCardClick = ( title, description ) =>
  {
    let projectData;
    switch ( title )
    {
      case "Tienda Virtual, proyecto final académico":
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
        projectData = {
          ...proyectos[3],
          images: carrouselIonicCadif1,
          url: "https://gitlab.com/Peererxon/proyectoionic_cadif1",
          demo: false
        };
        dispatch(openModal({ contentComponentName: 'ProjectsModal', modalContent: projectData }));
        break;

      case "FoundussApp":
        projectData = {
          ...proyectos[0],
          images: [imagenPFoundussApp],
          demo: false
        };
        dispatch(openModal({ contentComponentName: 'ProjectsModal', modalContent: projectData }));
        break;
      case "Caprofula":
        projectData = {
          ...proyectos[1],
          images: [imagenPCaprofula, carprofulacarrousel1, carprofulacarrousel2],
          demo: true,
          url: "http://caprofula.com/#/"
        };
        dispatch(openModal({ contentComponentName: 'ProjectsModal', modalContent: projectData }));
        break;

      case "Guitarras invie":
        projectData = {
          ...proyectos[2],
          images: [imagenPInvie, inviecarrousel1],
          demo: true,
          url: "https://peererxon.github.io/react_animated/"
        };
        dispatch(openModal({ contentComponentName: 'ProjectsModal', modalContent: projectData }));
        break;
      default:
        return; // Do nothing if title doesn't match
    }
  }
  //estaba asi en la doc, es para prevenir renders innecesarios
  //                          END Modal
  return (
    <Projects>
      {
        proyectos.map(
          ( { title, descripcion, imagenPrincipal }, index ) =>
          {
            return (
              <div key={index}>

                <ProjectCard
                  key={index}
                  title={title}
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
