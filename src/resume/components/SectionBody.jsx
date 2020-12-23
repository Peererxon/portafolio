import React from 'react'

import PropTypes from 'prop-types'

const SectionBody = ({elemento}) => {
    return (
        <div className="sectionbody">
            <ul>    
                {elemento.titulos.map( ( titulo,indice ) => <li style = { { margin:'10px 0px' } } key= {indice}> {titulo}</li>)}
                <li>
                    {elemento.contenido}

                </li>
            </ul>
        </div>

    )
}

SectionBody.propTypes = {
elemento: PropTypes.shape( { titulos:PropTypes.array,contenido: PropTypes.string} )
}

export default SectionBody