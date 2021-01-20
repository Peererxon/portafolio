import React, { memo } from 'react'
import './styles/SectionTitle.scss';

//memo solo funciona para comparar props
export const SectionTitle = memo( ( { title, body } ) =>
  (
    <div className ="SectionItem" >

      <div className="col s12 m6">
        <div className="sectionTitle">
          <div>
            <h2 className ="sectionTitle__h2">{title}</h2>
          </div>
        </div>
        {body}
      </div>
    </div>

  )
);//End memo
