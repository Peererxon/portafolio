import React from 'react'

const Hero = ({ children }) => {
    return(
        <div>
            <section>
                <div className ="hero">
                    {children}   
                    <div>
                    <p>Hola, mi nombre es </p> <br></br>
                    <h1>Anderson Gil</h1> <br></br>
                    <p>Desarrollador FrontEnd</p>  
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;