import React from 'react'
import { useTranslation } from 'react-i18next';
import './styles/SkillsContainer.scss';
import SkillItem from '../components/SkillItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const SkillsContainer = () => {
  const { t } = useTranslation();
  const skills = t( "resume:skills" ).split( ',' );
  return (
    <section className = "container skills">
      <div className = "Heading">

        <div className = "encabezado encabezado--full">
          <h2 className = "encabezado__title" > Skills</h2>
        </div>
      </div>
      <div className="skills-wrap">
        <div className="row">
          <FontAwesomeIcon icon={faReact} size="4x" color="blue" />

          {
            skills.map(
              ( skill, index )=> {
                // eslint-disable-next-line no-unused-vars
                let svgFontAwesome;
                // eslint-disable-next-line no-unused-vars
                let svgColor;
                console.log( skill )
                switch ( skill.toLocaleLowerCase() ) {
                  case "react":
                    svgFontAwesome = "faReact"
                    svgColor = "#61dbfb"
                    const faReact =  require( '@fortawesome/free-brands-svg-icons' ).faReact
                    break;

                  case "javascript":
                    svgFontAwesome = "faJavascript"
                    break;
                  default:
                    break;
                }
                return <SkillItem name={skill} key = {index} awesomeIconName={svgFontAwesome} svgColor= {svgColor} />
              }
            )
          }
        </div>

      </div>
    </section>
  )
}

export default SkillsContainer;
