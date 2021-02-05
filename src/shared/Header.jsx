import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from './Statics/frontal-min.png';
import i18next from 'i18next';
import { useTranslation } from "react-i18next";

// eslint-disable-next-line brace-style
const Header = () => {
  const { t } = useTranslation()

  return (
    <>
      <header>
        <nav>
          <div className="nav-wrapper black">
            <Link to={process.env.PUBLIC_URL} className ="tooltipped" data-position="right" data-tooltip= {t( "layout:header:tooltip" )}>
              <img src={ Logo } alt="imagen principal" className="brand-logo circle responsive-img" />
            </Link>
            <span className=" hide-on-med-and-down switch switch--large">
              <label>
                <span role="img" aria-label="bandera de estados españa">🇪🇸</span>
                <input type="checkbox" onChange= {( e ) => e.target.checked ? i18next.changeLanguage( 'en' ) : i18next.changeLanguage( 'es' ) } />
                <span className="lever"/>
                <span role="img" aria-label="bandera de estados unidos">🇺🇸</span>
              </label>
            </span>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to={process.env.PUBLIC_URL}>
                  { t( "layout:header:links:inicio" ) }
                </Link>
              </li>

              {/*               <li>
                <Link to={"about"}>
                  About
                </Link>
              </li> */}

              <li>
                <Link to={"resume"}>
                  { t( "layout:header:links:resumen" ) }
                </Link>
              </li>

              <li>
                <Link to={"work"}>
                  { t( "layout:header:links:trabajo" ) }
                </Link>
              </li>

              {/*               <li>
                <Link to={"contact"}>
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          <aside>
            <ul className="sidenav" id="mobile-demo">
              <li>
                <Link to={process.env.PUBLIC_URL} className = "sidenav-close">
                  { t( "layout:header:links:inicio" ) }
                </Link>
              </li>

              {/*           <li>
                <Link to={"about"}>
                  About
                </Link>
              </li> */}

              <li>
                <Link to={"Resume"}  className = "sidenav-close">
                  { t( "layout:header:links:resumen" ) }
                </Link>
              </li>

              <li>
                <Link to={"work"}  className = "sidenav-close">
                  { t( "layout:header:links:trabajo" ) }
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
                      <span role="img" aria-label="bandera de estados españa">🇪🇸</span>
                      <input type="checkbox" onChange= {( e ) => e.target.checked ? i18next.changeLanguage( 'en' ) : i18next.changeLanguage( 'es' ) } />
                      <span className="lever"/>
                      <span role="img" aria-label="bandera de estados unidos">🇺🇸</span>
                    </label>
                  </div>
                </a>
              </li>
            </ul>

          </aside>
        </nav>
      </header>
    </>
  );
}

export default Header;
