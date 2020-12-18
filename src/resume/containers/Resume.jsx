import React from 'react';
import { Heading } from '../components/Heading';
import './styles/Resume.scss';
import { Sections } from './Sections';
import { SectionTitle } from '../components/SectionTitle';
import SectionBody from '../components/SectionBody';

import { useTranslation } from 'react-i18next';

//var renders =0
const Resume = () => {
    //renders ++
    //console.log("numero de renderizaciones:"+renders);
    const {t} = useTranslation();
    let secciones = []
    const titulos = t("resume:secciones:titulos").split(",");
    const habilidades = t("resume:secciones:habilidades").split(",");
    const carreras = t("resume:estudios:titulos").split(",");
    const aprovadoPor = t("resume:estudios:lugares").split(",");
    
    console.log(aprovadoPor)
    console.log(carreras)
    //tomo los elementos desde la traduccion de i18n en el archivo json

    titulos.map( (titulo,index) => secciones[index]= {...secciones[index],titulo} )
    //i fill the array with the titles adding   for each object the property  titulo
    const habilidadesIndex = secciones.findIndex( element => element.titulo  === "Habilidades" )

    secciones[habilidadesIndex].contenidos = [...habilidades]
    return (
        <div className = "Resume">
            <Heading />
            <Sections >
                {secciones.map( ({titulo,contenidos},index) => 
                    contenidos? <SectionTitle key={index} title={titulo} body= {<SectionBody elementos={contenidos}/>} />
                    : <SectionTitle key={index} title={titulo}  body= {<SectionBody elementos={[]}/>} /> 
                    )}
            </Sections>
        </div>
        
        
    )
}

export default Resume;