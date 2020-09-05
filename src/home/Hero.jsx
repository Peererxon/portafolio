import React from 'react'
import './styles/hero.scss';
import background from '../shared/src/hero_test.svg';

const Hero = () => {
    return(
        <div>
            <section>
            <div className="wrap-hero">
                    <div className="backgraundHero" style= {{background: `linear-gradient(141deg, rgb(17 19 23 / 67%) 10%, rgb(69 72 78 / 59%) 51%, rgb(17 19 23 / 88%) 75%),url(${background}) no-repeat center`}}>
                        <div className="backgraundHero__p">
                            <p>Hola, soy Anderson Gil</p>
                        </div>

                        <div className="backgraundHero__h2">
                            <h2>Desarrollador web</h2>
                        </div>
                    </div>
                </div>{/* <!--EndHero--> */}
            </section>
        </div>
    )
}

export default Hero;