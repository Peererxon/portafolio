import React from 'react'
import './styles/SectionBody.scss';
import PropTypes from 'prop-types'
export const SectionBody = ( { elemento } ) =>
{
  return (
    <div className="sectionbody">
      <ul>
        {
          elemento.titulos.map(
            ( titulo, indice ) =>
            {
              if ( indice === 0 )
              {
                return <li key= {indice} className=" sectionbody__li sectionbody__li--withTitle"> {titulo}</li>;
              }
              return <li key= {indice} className="sectionbody__li" > {titulo} </li>;
            }
          )
        }{/* END map function */}

        <li className="sectionbody__li">
          {elemento.contenido}

        </li>
      </ul>
    </div>
  )
}

SectionBody.propTypes = {
  elemento: PropTypes.shape( { titulos: PropTypes.array, contenido: PropTypes.string } )
}
