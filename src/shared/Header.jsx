import React,{useContext} from "react";
import "./styles/Header.scss";
import Logo from './src/frontal-min.png';
//import M from "materialize-css/dist/js/materialize.min.js";
//import { BrowserRouter, Route } from "react-router-dom";
import { contextoPadre } from "..";

const Header = () => {
  const contexto = useContext(contextoPadre);
  return(
    <div>
      <header>
        <nav>
          <div className="nav-wrapper black">
            
            <img src={ Logo } alt="imagen principal" className="brand-logo circle responsive-img" />
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
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
    </div>
  );
}

export default Header;
