import React from 'react';
import './styles/Footer.scss';
import { Slide, Roll, Bounce } from "react-awesome-reveal";
import { useTranslation } from 'react-i18next';
import { screenWidth } from './utils/js';
//redes
import facebookPic from './Statics/facebook.png';
import linkedinPic from './Statics/linkedin.png';
import githubPic from './Statics/github.png';
import instagram from './Statics/instagram.png'
//END redes
import correoIcon from './Statics/correo.png';
import clickUX from './Statics/actionClick.png';
// eslint-disable-next-line brace-style
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer--card">
      <div className="row row--no-mb">
        <div className="col l6 offset-s3 s6 footer__contact">
          <div className = "footer__contact_h5">

            <h5 className="white-text">{ t( "layout:footer:titulo" ) }</h5>
            <hr className="hr--reveal" />
          </div>
          {/* MAILTO*/}
          <div>
            <a
              className="grey-text text-lighten-4"
              href="mailto:andersongil.dev@gmail.com?Subject=(portafolio)%20Quiero%20hacer%20un%20proyecto%20contigo"
            >
              { t( "layout:footer:invitacion" ) }<span className ="hide-on-small-only"> <img src={correoIcon} title="Imagen de una carta de correo para contactarme" alt="Enviar un correo a anderson gil (peererxon)"/> </span>
            </a>

          </div>
          {/* ENDMAILTO*/}
        </div>

        {/* SOCIALSNETWORKS */}
        <div className="col l6 offset-s3 s6 center-align">
          {/* TITLE */}
          <div className="col col--no-padding s12 ">
            <h5 className="white-text">
              { t( "layout:footer:sigueme" ) }
              <div>
                <img
                  className="footer__img footer__img--zoom"
                  src={clickUX}
                  alt="Selecciona los iconos de las redes sociales para contactarme"
                  title="Imagen de raton UX"
                />
              </div>
            </h5>
          </div>
          {/* ENDTITLE */}

          {/* NETWORKS */}
          { screenWidth < 600 ?
            <Roll cascade triggerOnce={true}>
              <div className="col col--no-padding s12 m3">
                <a href="https://www.facebook.com/peererxon" rel="noopener noreferrer" target="_blank" >
                  <img loading="lazy"
                    src={facebookPic}
                    className="footer__img"
                    width="50px"
                    title="imagen de facebook como medio de contacto"
                    alt="facebook de anderson gil para contactarlo"
                  />
                </a>
              </div>
              <div className="col col--no-padding s12 m3">
                <a href="https://www.instagram.com/peererxon/?hl=es-la" rel="noopener noreferrer" target="_blank">
                  <img src={instagram} 
                    className="footer__img"
                    width="50px"
                    title="imagen de instagram como medio de contacto"
                    alt="instagram de anderson gil para contactarlo"
                  />

                </a>

              </div>
              <div className="col col--no-padding s12 m3">
                <a href="https://github.com/Peererxon" rel="noopener noreferrer" target="_blank">
                  <img src={githubPic} 
                    className="footer__img"
                    width="50px"
                    title="imagen de github como medio de contacto"
                    alt="github de anderson gil para contactarlo"
                  />
                </a>
              </div>
              <div className="col col--no-padding s12 m3">
                <a href="https://ve.linkedin.com/in/anderson-gil-petit-56a923180" rel="noopener noreferrer" target="_blank">
                  <img src={linkedinPic} 
                    className="footer__img"
                    width="50px"
                    title="imagen de linkedin como medio de contacto"
                    alt="linkedin de anderson gil para contactarlo"
                  />
                </a>
              </div>
            </Roll> :
            <Bounce cascade triggerOnce={true}>
              <div className="col col--no-padding s12 m3">
                <a href="https://www.facebook.com/peererxon" rel="noopener noreferrer" target="_blank" >
                  <img loading="lazy"
                    src={facebookPic}
                    className="footer__img"
                    width="50px"
                    title="imagen de facebook como medio de contacto"
                    alt="facebook de anderson gil para contactarlo"
                  />
                </a>
              </div>
              <div className="col col--no-padding s12 m3">
                <a href="https://www.instagram.com/peererxon/?hl=es-la" rel="noopener noreferrer" target="_blank">
                  <img src={instagram} 
                    className="footer__img"
                    width="50px"
                    title="imagen de instagram como medio de contacto"
                    alt="instagram de anderson gil para contactarlo"
                  />

                </a>

              </div>
              <div className="col col--no-padding s12 m3">
                <a href="https://github.com/Peererxon" rel="noopener noreferrer" target="_blank">
                  <img src={githubPic} 
                    className="footer__img"
                    width="50px"
                    title="imagen de github como medio de contacto"
                    alt="github de anderson gil para contactarlo"
                  />
                </a>
              </div>
              <div className="col col--no-padding s12 m3">
                <a href="https://ve.linkedin.com/in/anderson-gil-petit-56a923180" rel="noopener noreferrer" target="_blank">
                  <img src={linkedinPic} 
                    className="footer__img"
                    width="50px"
                    title="imagen de linkedin como medio de contacto"
                    alt="linkedin de anderson gil para contactarlo"
                  />
                </a>
              </div>
            </Bounce>
          }
          {/* ENDNETWORKS */}
        </div>
        {/* ENDSOCIALSNETWORKS */}
        {/* COPYRIGHT */}
        <div className="col col--no-padding s6 offset-s3 m4 offset-m4">
          <div className="footer-copyright center-align">
            <Slide direction="up">
              <span className= "white-text" >&copy; 2020 Anderson Gil. { t( "layout:footer:derechos" ) }</span>
            </Slide>
          </div>
        </div>
        {/* ENDCOPYRIGHT */}

      </div>

    </footer>

  )
};

export default Footer;
