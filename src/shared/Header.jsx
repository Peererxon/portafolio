import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./styles/Header.scss";
import Logo from './src/frontal-min.png';
//import M from "materialize-css/dist/js/materialize.min.js";
//import { BrowserRouter, Route } from "react-router-dom";
import { contextoPadre } from "..";

const Header = () => {
  const contexto = useContext(contextoPadre);
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
              <li><a href="sass.html">Sass {contexto.español[0].nombre} </a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Sass {contexto.español[0].nombre}</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </header>
    </>
  );
}

export default Header;
