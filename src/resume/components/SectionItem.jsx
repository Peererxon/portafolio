import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './styles/SectionItem.scss';

export const SectionItem = ( { title } ) => (
    <div className ="SectionItem" >

        <div className="col s12 m6">
            <div className="sectionTitle">
                <div>
                    <h2 className ="sectionTitle__h2">{title}</h2>
                </div>
            </div>
            <p className ="Heading__p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores non esse repellendus voluptas eaque earum ea, corrupti quo, nostrum ab quos rerum quis a dolorum reprehenderit. Nesciunt ab totam dolorum.</p>
        </div>
    </div>
    
);