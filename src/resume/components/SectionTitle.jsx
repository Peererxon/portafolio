import React, { memo } from 'react'
import './styles/SectionTitle.scss';

//memo solo funciona para comparar props
export const SectionTitle = memo( ( { title, body } ) =>
  (
    <div className ="SectionItem" >

      <div className="col s12 m6">
        <div className="sectionTitle">
          <div>
            <h3 className ="sectionTitle__h3">{title}</h3>
          </div>
        </div>
        {body}
      </div>
    </div>

  )
);//End memo
