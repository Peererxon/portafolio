import React from 'react';
import './styles/Footer.scss';

const Footer = () =>(
    <footer className="footer--card cardCenter">
        <div className="row">
            <div className="col l12 offset-s4 s6 footer__contact">
                <div className="col s6">
                    <h5 className="white-text">Contacto</h5>
                    <hr className="hr--reveal" />

                </div>
            </div>

            <div className="col l6  offset-s4 s6">
                <h5 className="white-text">texto para contectarme</h5>
            </div>
            
            <div className="col l6 offset-m3 offset-s4 s6">
                <h5 className="white-text">Sigueme!</h5>
                <div className="col s12 m4">
                    <h5 className="white-text">Icono1</h5>

                </div>
                <div className="col s12 m4">
                    <h5 className="white-text">Icono2</h5>

                </div>
                <div className="col s12 m4">
                    <h5 className="white-text">Icono3</h5>

                </div>

            </div>

        </div>

        <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
        </div>
    </footer>
);

export default Footer;