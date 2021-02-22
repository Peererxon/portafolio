import React from 'react'
import './styles/Hero.scss';
import background from '../../shared/Statics/hero_test.svg';
import { useTranslation } from 'react-i18next';
import { Slide } from "react-awesome-reveal";
import { screenWidth } from '../../shared/utils/js'

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      { screenWidth > 600 ?
        <Slide triggerOnce>
          <section>
            <div className="wrap-hero">
              <div className="backgraundHero" style= {{background: `linear-gradient(141deg, rgba(17, 19, 23, 0.67) 10%, rgb(69 72 78 / 0%) 51%, rgba(17, 19, 23, 0.88) 75%),url(${background}) no-repeat center`}}>
                <div className="backgraundHero__welcome">
                  <span className="backgraundHero__descript">{t(`home:hello`) }
                    <h1 className="title">Anderson Gil</h1>
                  </span>
                </div>

                <div>
                  <h2 className="backgraundHero__descript">{t('home:roll')}</h2>
                </div>
              </div>
            </div>{/* <!--EndHero--> */}
          </section>
        </Slide> :
        <section>
          <div className="wrap-hero">
            <div className="backgraundHero" style= {{background: `linear-gradient(141deg, rgba(17, 19, 23, 0.67) 10%, rgb(69 72 78 / 0%) 51%, rgba(17, 19, 23, 0.88) 75%),url(${background}) no-repeat center`}}>
              <div className="backgraundHero__welcome">
                <span className="backgraundHero__descript">{t(`home:hello`) }
                  <h1 className="title">Anderson Gil</h1>
                </span>
              </div>

              <div>
                <h2 className="backgraundHero__descript">{t('home:roll')}</h2>
                <span style= {{ fontSize: "1px", color: "gray" }} >picture for freepick</span>
              </div>
            </div>
          </div>{/* <!--EndHero--> */}
        </section>
      }
    </>
  )
}

export default Hero;