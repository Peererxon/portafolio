import React, { memo } from 'react'
import './styles/SkillItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons';

// this component need to use fontAwesome for react and materialize to work fine
const SkillItem = memo(
  ( { awesomeIconName, svgColor, name } ) => {
    return (
      <div className={`col s3 skill`}>
        <FontAwesomeIcon className="skill__img" icon={( awesomeIconName === "react" ) ? faReact : null} size="4x" color={svgColor ? svgColor : "black"} />
{/*         <img className="skill__img" src={src} title={`Imagen de ${name}`} alt={`Imagen sobre la habilidad ${name} con la que trabaja anderson gil`}/>
 */}        <p className="skill__p">{name}</p>
      </div>

    )
  }
)
export default SkillItem;
