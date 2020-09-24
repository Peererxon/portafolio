import React from 'react'
import '../styles/AboutMe.scss';
function AboutMe( {children} ) {
    return(

        <div className="wrap_about">
            {children}
        </div>
    )
};

export default AboutMe;