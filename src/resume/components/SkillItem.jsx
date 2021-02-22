import React, { memo } from 'react'
import './styles/SkillItem.scss';

const SkillItemNoAwesome = memo(
  // eslint-disable-next-line brace-style
  ( { item } ) => {
    const { name, srcIcon, svgColor } = item
    return (
      <div className={`col s4 m3`}>

        <div className="skill">
          <img alt="" className="skill__img" src={srcIcon} color={svgColor ? svgColor : "black"} />
          <p className="skill__p">{name}</p>
        </div>

      </div>

    )
  }
)
export default SkillItemNoAwesome;
