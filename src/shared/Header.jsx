import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from './Statics/frontal-min.png';
//import M from "materialize-css/dist/js/materialize.min.js";
//import { BrowserRouter, Route } from "react-router-dom";

const Header = () => {
  return(
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
            <Link to={process.env.PUBLIC_URL}>
              Home
            </Link>
          </li>

{/*           <li>
            <Link to={"about"}>
              About
            </Link>
          </li> */}

          <li>
            <Link to={"Resume"}>
              Resume
            </Link>
          </li>
          
          <li>
            <Link to={"work"}>
              Work
            </Link>
          </li>
          
{/*           <li>
            <Link to={"contact"}>
              Contact
            </Link>
          </li>
 */}        </ul>
      </header>
    </>
  );
}

export default Header;
