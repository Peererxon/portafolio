import React,{ memo } from 'react'
import './styles/SectionBody.scss';

const SectionBody = memo( ( { elementos } ) => 
    (
        <div className="sectionbody">
            <ul>
                
                { 
                    elementos.map( (elemento,index) => 
                        (
                            <div key= {index} className="list">
                                <li>{elemento}</li>
                            </div>
                        )
                    ) 
                }
                
            </ul>
        </div>
    )
)

export default SectionBody