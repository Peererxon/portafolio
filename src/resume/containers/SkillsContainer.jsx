import React from 'react'
import { useTranslation } from 'react-i18next';
import './styles/SkillsContainer.scss';
import SkillItem from '../components/SkillItem';

import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import
{
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
                    svgFontAwesome = faReact
                    svgColor = "#61dbfb"
                    break;

                  case "javascript":
                    svgFontAwesome = faJs
                    svgColor = "#f0db4f"
                    break;

                  case "docker":
                    svgFontAwesome = faDocker;
                    svgColor = "#0DB7ED"
                    break;

                  case "git":
                    svgFontAwesome = faCodeBranch;
                    svgColor = "#F1502F"
                    break;

                  case "boostrap":
                    svgFontAwesome = faBootstrap;
                    svgColor = "#563d7c"
                    break;

                  case "angular":
                    svgFontAwesome = faAngular
                    svgColor = "#a6120d"
                    break;

                  case "html":
                    svgFontAwesome = faHtml5
                    svgColor = "#f06529"
                    break;

                  case "css":
                    svgFontAwesome = faCss3Alt
                    svgColor = "#2965f1"
                    break;

                  case "sass":
                    svgFontAwesome = faSass
                    svgColor = "#cc6699"
                    break;

                  case "android":
                    svgFontAwesome = faAndroid
                    svgColor = "#32DE84"
                    skill = "Aprendiendo";
                    break;

                  default:
                    break;
                }

                return <SkillItem name={skill} key = {index} awesomeIcon={svgFontAwesome} svgColor= {svgColor} />
              }
            )
          }
        </div>

      </div>
    </section>
  )
}

export default SkillsContainer;
