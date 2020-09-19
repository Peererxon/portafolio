import React from 'react'
import '../styles/hero.scss';
import background from '../../shared/Statics/hero_test.svg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const {t} = useTranslation();
    return(
        <div>
            <section>
                <div className="wrap-hero">
                    <div className="backgraundHero" style= {{background: `linear-gradient(141deg, rgba(17, 19, 23, 0.67) 10%, rgb(69 72 78 / 0%) 51%, rgba(17, 19, 23, 0.88) 75%),url(${background}) no-repeat center`}}>
                        <div className="backgraundHero__welcome">
                            <span className="backgraundHero__descript">{t(`welcome`) }Hola, soy 
                                <h1 className="title">Anderson Gil</h1>
                            </span>
                        </div>

                        <div>
                            <h2 className="backgraundHero__descript">Desarrollador web</h2>
                        </div>
                    </div>
                </div>{/* <!--EndHero--> */}
            </section>
        </div>
    )
}

export default Hero;