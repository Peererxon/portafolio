import React from 'react'
import { useTranslation } from 'react-i18next';
import './styles/SkillsContainer.scss';
import SkillItemAwesome from '../components/SkillItemAwesome';
import SkillItemNoAwesome from '../components/SkillItem';

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
import reduxIcon from '../../shared/Statics/skills/redux.svg'
import reactRouterIcon from '../../shared/Statics/skills/react-router.svg'
// eslint-disable-next-line brace-style
const SkillsContainer = () => {
  const { t } = useTranslation();
  const skills = t( "resume:skills" ).split( ',' );

  // eslint-disable-next-line brace-style
  const selectIcon = ( skillName ) => {

    let svg;
    let fontAwesome;
    let svgColor;

    //this svg var will be use when not FontAwesomeSvg is in use (customsvg)
    switch ( skillName.toLocaleLowerCase() )
    {
      case "react":
        svg = faReact
        svgColor = "#61dbfb"
        fontAwesome = true
        break;

      case "javascript":
        svg = faJs
        svgColor = "#f0db4f"
        fontAwesome = true
        break;

      case "docker":
        svg = faDocker;
        svgColor = "#0DB7ED"
        fontAwesome = true
        break;

      case "git":
        svg = faCodeBranch;
        svgColor = "#F1502F"
        fontAwesome = true
        break;

      case "boostrap":
        svg = faBootstrap;
        svgColor = "#563d7c"
        fontAwesome = true
        break;

      case "angular":
        svg = faAngular
        svgColor = "#a6120d"
        fontAwesome = true
        break;

      case "html":
        svg = faHtml5
        svgColor = "#f06529"
        fontAwesome = true
        break;

      case "css":
        svg = faCss3Alt
        svgColor = "#2965f1"
        fontAwesome = true
        break;

      case "sass":
        svg = faSass
        svgColor = "#cc6699"
        fontAwesome = true
        break;

      case "android":
        svg = faAndroid
        svgColor = "#32DE84"
        // redefiniendo el nombre
        skillName = "Aprendiendo";
        fontAwesome = true
        break;

      case "redux":
        svg = reduxIcon
        svgColor = "#61dbfb"
        fontAwesome = false
        break;

      case "react router":
        svg = reactRouterIcon
        svgColor = "#61dbfb"
        fontAwesome = false
        break;

      default:
        break;
    }

    return { svg, svgColor, fontAwesome, name: skillName }
  }
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
              ( skillname, index )=>
              {

                const skillItem = selectIcon( skillname )

                if ( skillItem.fontAwesome )
                {
                  const skill = { ...skillItem, awesomeIcon: skillItem.svg }
                  return <SkillItemAwesome item={skill} key = {index} />
                }
                else
                {
                  const skill = { ...skillItem, srcIcon: skillItem.svg }
                  return <SkillItemNoAwesome item={skill} key={index} />
                }
              }
            )
          }
        </div>

      </div>
    </section>
  )
}

export default SkillsContainer;
