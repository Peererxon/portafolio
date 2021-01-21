import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from './Statics/frontal-min.png';
import i18next from 'i18next';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-wrapper black">
            <Link to={process.env.PUBLIC_URL} className ="tooltipped" data-position="right" data-tooltip="Hola! Me llamo Anderson Gil">
              <img src={ Logo } alt="imagen principal" className="brand-logo circle responsive-img" />
            </Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to={process.env.PUBLIC_URL}>
                  Home
                </Link>
              </li>

              {/*               <li>
                <Link to={"about"}>
                  About
                </Link>
              </li> */}

              <li>
                <Link to={"resume"}>
                  Resume
                </Link>
              </li>

              <li>
                <Link to={"work"}>
                  Work
                </Link>
              </li>

              {/*               <li>
                <Link to={"contact"}>
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to={process.env.PUBLIC_URL}  className = "sidenav-close">
              Home
            </Link>
          </li>

          {/*           <li>
            <Link to={"about"}>
              About
            </Link>
          </li> */}

          <li>
            <Link to={"Resume"}  className = "sidenav-close">
              Resume
            </Link>
          </li>

          <li>
            <Link to={"work"}  className = "sidenav-close">
              Work
            </Link>
          </li>

          {/*           <li>
            <Link to={"contact"}>
              Contact
            </Link>
          </li>
 */}
          <li>
            <a className = "sidenav-close">
              <div className="switch">
                <label>
                  <span role="img" aria-label="bandera de estados unidos">🇪🇸</span>
                  <input type="checkbox" onChange= {( e ) => e.target.checked ? i18next.changeLanguage( 'en' ): i18next.changeLanguage( 'es' ) } />
                  <span className="lever"/>
                  <span role="img" aria-label="bandera de estados unidos">🇺🇸</span>
                </label>
              </div>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
