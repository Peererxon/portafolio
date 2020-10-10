import React from 'react'
import '../styles/AboutMe.scss';
function AboutMe( {children} ) {
    return(

        <div className="wrap_about">
            {children}
            <br/>
        </div>
    )
};

export default AboutMe;