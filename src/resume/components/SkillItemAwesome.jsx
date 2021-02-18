import React, { memo } from 'react'
import './styles/SkillItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// this component need to use fontAwesome for react and materialize to work fine
const SkillItemAwesome = memo(
  // eslint-disable-next-line brace-style
  ( { item } ) => {
    const { name, awesomeIcon, svgColor } = item
    return (
      <div className={`col s4 m3`}>

        <div className="skill">
          <FontAwesomeIcon className="skill__img" icon={awesomeIcon} size="5x" color={svgColor ? svgColor : "black"} />
          <p className="skill__p">{name}</p>
        </div>

      </div>

    )
  }
)
export default SkillItemAwesome;
