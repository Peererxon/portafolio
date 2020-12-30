import React, { memo } from 'react'
import './styles/SkillItem.scss';

const SkillItem = memo(
    ( { src,name } ) => {
            return (
                <div className={`col s3 skill`}>

                    <img className="skill__img" src={src} title={`Imagen de ${name}`} alt={`Imagen sobre la habilidad ${name} con la que trabaja anderson gil`}/>
                    <p className="skill__p">{name}</p>
                </div>

            )
        
    }
)
export default SkillItem;