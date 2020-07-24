import React, { useEffect } from "react";
//import M from "materialize-css/dist/js/materialize.min.js";
//import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

const Header = () => {


  return(
    <div>
      <header>
        <nav>
          <div className="nav-wrapper black">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </header>

    </div>
  );
}

export default Header;
