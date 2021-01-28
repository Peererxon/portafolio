import React from 'react';
import './styles/Footer.scss';
import facebookPic from './Statics/facebook.png';
import linkedinPic from './Statics/linkedin.png';
import githubPic from './Statics/github.png';
import gitlabPic from './Statics/gitlab.png';
import correoIcon from './Statics/correo.png';
import clickUX from './Statics/actionClick.png';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line brace-style
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer--card">
      <div className="row row--no-mb">
        <div className="col l12 offset-s3 s6 footer__contact">
          <div className = "footer__contact_h5">

            <h5 className="white-text">{ t( "layout:footer:titulo" ) }</h5>
            <hr className="hr--reveal" />
          </div>

        </div>

        <div className="col l6 offset-s3 s6">
          <a
            className="grey-text text-lighten-4"
            href="mailto:andersongil.dev@gmail.com?Subject=(portafolio)%20Quiero%20hacer%20un%20proyecto%20contigo"
          >
            { t( "layout:footer:invitacion" ) }<span className ="hide-on-small-only"> <img src={correoIcon} alt=""/> </span>
          </a>
        </div>

        {/* SOCIALSNETWORKS */}
        <div className="col l6 offset-s3 s6 center-align">
          <div className="col col--no-padding s12 offset-m3 m9">
            <h5 className="white-text">
              { t( "layout:footer:sigueme" ) }
              <div>
                <img
                  className="footer__img footer__img--zoom"
                  src={clickUX}
                  alt="icono de un raton"
                  title="Imagen de raton para mejorar UX"
                />
              </div>
            </h5>

          </div>

          <div className="col col--no-padding s12 m3">
            <img loading="lazy" src={facebookPic} className="footer__img" width="50px" title="icono de facebook para contacto" alt="contacto por medio de facebook" />

          </div>
          <div className="col col--no-padding s12 m3">
            <img src={gitlabPic} className="footer__img" width="50px" title="icono de gitlab para contacto" alt="contacto por medio de gitlab" />

          </div>
          <div className="col col--no-padding s12 m3">
            <img src={githubPic} className="footer__img" width="50px" title="icono de github para contacto" alt="contacto por medio de github" />

          </div>

          <div className="col col--no-padding s12 m3">
            <img src={linkedinPic} className="footer__img" width="50px" title="icono de linkedin para contacto" alt="contacto por medio de github" />

          </div>
        </div>
        {/* ENDSOCIALSNETWORKS */}

        {/* COPYRIGHT */}
        <div className="col col--no-padding s6 offset-s3 m4 offset-m4">
          <div className="footer-copyright center-align">
            <span className= "white-text" >&copy; 2020 Anderson Gil. { t( "layout:footer:derechos" ) }</span>
          </div>
        </div>
        {/* ENDCOPYRIGHT */}

      </div>

    </footer>

  )
};

export default Footer;
