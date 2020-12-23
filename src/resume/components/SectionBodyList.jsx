import React,{ memo } from 'react'
import './styles/SectionBody.scss';

const SectionBodyList = memo( ( { elementos } ) => 
    (
        
        <div className="sectionbody">
            <ul>
                { 
                    elementos.map( (elemento,index) => 
                        (
                            <li key= {index}>{elemento}</li>
                        )
                    ) 
                }
                
            </ul>
        </div>
    )
)

export default SectionBodyList