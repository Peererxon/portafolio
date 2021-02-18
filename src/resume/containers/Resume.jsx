import React from 'react';
import { useTranslation } from 'react-i18next';

import './styles/Resume.scss';
import { Heading } from '../components/Heading';
import { Sections } from './Sections';
import { SectionTitle } from '../components/SectionTitle';
import { SectionBody } from '../components/SectionBody';
import { SectionBodyList } from '../components/SectionBodyList';
import SkillsContainer from './SkillsContainer';

// eslint-disable-next-line brace-style
const Resume = () => {
  /**
     * @author Peererxon
     * @param { string }  direccionI18n patch of the text in index.json for i18n
     * @returns un objeto con la estructura { titulo:[],contenido:string }
     */
  const cargarSecciones = ( direccionI18n ) =>
  {
    const titulos = t( direccionI18n ).split( '.' )
    const contenido = titulos.pop().trim();
    return { titulos, contenido }
  }

  //tomo los elementos desde la traduccion de i18n en el archivo json
  const { t } = useTranslation();
  const secciones = []
  const titulos = t( "resume:secciones:titulos" ).split( "," );
  const habilidades = t( "resume:secciones:habilidades" ).split( "," );

  ////////////////////////////////////////////////////////  CARRERAS //////////////////////////////////////////////////////
  const platziEscuelaJS = cargarSecciones( "resume:estudios:platziEscuelaJS" );
  const platziArquitectura = cargarSecciones( "resume:estudios:platziArquitectura" );
  const cadif1FrontEnd = cargarSecciones( "resume:estudios:cadif1" );

  //////////////////////////////////////////////////////// END CARRERAS /////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////Work Experience //////////////////////////////////////////////////////
  const binauralExperience = cargarSecciones( "resume:experiencia:Binaural" );
  const foundussExperience = cargarSecciones( "resume:experiencia:Founduss" );

  ////////////////////////////////////////////////////// END WORK EXPERIENCE //////////////////////////////////////////////////////
  const foundussApp = cargarSecciones( "resume:proyectos:1" );
  const caprofulaWeb = cargarSecciones( "resume:proyectos:2" );
  ////////////////////////////////////////////////////////  PROYECTOS //////////////////////////////////////////////////////

  //////////////////////////////////////////////////////     CARGANDO SECCIONES //////////////////////////////////////////////////////
  //i fill the array with the titles adding for each object the property  titulo
  titulos.map( ( titulo, index ) => secciones[index] = { ...secciones[index], titulo } )

  //got te index of the array to fill it by him content (if i change the order in the near future it wont be broken :) )
  const habilidadesIndex = secciones.findIndex( ( { titulo } ) => ( titulo.trim() === "Habilidades" ) || ( titulo.trim() === "Skills" ) )
  const experienciaLaboralIndex = secciones.findIndex( ( { titulo } ) => ( titulo.trim() === "Experiencia Laboral" ) || ( titulo.trim() === "Professional Experience" ) )
  const estudiosIndex = secciones.findIndex( ( { titulo } ) => ( titulo.trim() === "Estudios Profesionales" ) || ( titulo.trim() === "Professional studies" ) )
  const proyectosDestacadosIndex = secciones.findIndex( ( { titulo } ) => ( titulo.trim() === "Proyectos más destacados" ) || ( titulo.trim() === "Featured projects" ) )

  secciones[estudiosIndex].contenidos = [platziEscuelaJS, cadif1FrontEnd, platziArquitectura]
  secciones[habilidadesIndex].contenidos = [...habilidades]
  secciones[experienciaLaboralIndex].contenidos = [binauralExperience, foundussExperience]
  secciones[proyectosDestacadosIndex].contenidos = [foundussApp, caprofulaWeb]
  //////////////////////////////////////////////////////// END CARGANDO SECCIONES //////////////////////////////////////////////////////
  console.group( "secciones:" )
  console.table( secciones )
  console.groupEnd()
  return (
    <div className = "Resume">
      <Heading title={t( "resume:title" )} body={t( "resume:aspiracion" )}/>
      <Sections >
        {secciones.map( ( { titulo, contenidos }, index ) =>
        {

          if ( contenidos !== undefined )
          {
            if ( habilidadesIndex === index )
            //si es iterable, (esto solo ocurre en la sección de habilidades de momento)
            {
              return <SectionTitle key={index} title={titulo} body= {<SectionBodyList elementos={contenidos}/>} />
            }
            else
            {//contenidos es un objeto
              const elementos = contenidos.map( ( elemento, index ) => <SectionBody key= { index } elemento={elemento}/> )
              return <SectionTitle key={index} title={titulo} body= {elementos} />
            }
          }
          else
          {
            return <SectionTitle key={index} title={titulo} body= {<SectionBodyList elementos={[]}/>} />
          }

        }

        )}
      </Sections>
      <SkillsContainer />
    </div>

  )
}

export default Resume;
