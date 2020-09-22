import React from 'react'
import '../styles/AboutMe.scss';
function AboutMe( {children} ) {
    return(

        <div className="wrap_about">
            <div className="about">
                {children}

            </div>
        </div>
    )
};

export default AboutMe;