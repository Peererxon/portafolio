import React from 'react'

export const SectionBodyList = ( { elementos } ) =>
  (

    <div className="sectionbody">
      <ul>
        {
          elementos.map( ( elemento, index ) =>
            (
              <li key= {index} >{elemento}</li>
            )
          )
        }

      </ul>
    </div>
  )
