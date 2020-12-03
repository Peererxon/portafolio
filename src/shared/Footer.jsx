import React from 'react';
import './styles/Footer.scss';
import facebookPic from './Statics/facebook.png';
import linkedinPic from './Statics/linkedin.png';
import githubPic from './Statics/github.png';
import gitlabPic from './Statics/gitlab.png';
import correoIcon from './Statics/correo.png';
import clickUX from './Statics/actionClick.png';


const Footer = () =>(
    <footer className="footer--card">
        <div className="row">
            <div className="col l12 offset-s4 s6 footer__contact">
                <div className = "footer__contact_h5">
                    
                    <h5 className="white-text">Contacto</h5>
                    <hr className="hr--reveal" />
                </div>                

            </div>

            <div className="col l6  offset-s4 s6">
                <a 
                    className="grey-text text-lighten-4"
                    href="mailto:andersongil.dev@gmail.com?Subject=(portafolio)%20Quiero%20hacer%20un%20proyecto%20contigo"
                >
                    ¿Quieres que trabajemos juntos en un proyecto?<span className ="hide-on-small-only"> <img src={correoIcon} alt=""/> </span>
                </a>
            </div>
            
            <div className="col l6 offset-m3 offset-s4 s6">
                <div className="col s12 offset-m3 m9">
                    <h5 className="white-text">Sigueme! 
                        <span>
                            <img
                                className="footer__img footer__img--zoom" 
                                src={clickUX} 
                                alt="icono de un raton" 
                                title="Imagen de raton para mejorar UX" 
                            />
                        </span>
                    </h5>
                    
                </div>
                <div className="col s12 m3">
                    <img src={facebookPic} className="footer__img" width="50px" title="icono de facebook para contacto" alt="contacto por medio de facebook" />

                </div>
                <div className="col s12 m3">
                <img src={gitlabPic} className="footer__img" width="50px" title="icono de gitlab para contacto" alt="contacto por medio de gitlab" />

                </div>
                <div className="col s12 m3">
                <img src={githubPic} className="footer__img" width="50px" title="icono de github para contacto" alt="contacto por medio de github" />

                </div>

                <div className="col s12 m3">
                    <img src={linkedinPic} className="footer__img" width="50px" title="icono de linkedin para contacto" alt="contacto por medio de github" />

                </div>

            </div>

        </div>
        
        <div className="container">
            <div className="row">

                <div className="footer-copyright">            
                    <span className= "white-text right" >&copy; 2020 Anderson Gil. Todos los derechos reservados.</span>
                </div>
            </div>
        </div>

    </footer>
);

export default Footer;