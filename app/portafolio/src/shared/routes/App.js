import React, {Suspense,useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";

//import M from 'materialize-css';
import NotFound from '../../notfound/NotFount';
import Preloader from '../components/Preloader_line';

//Lazy components
const Header = React.lazy( () => import ('../Header') ); //usando code splitting con rutas

//EndLazy components

function App() {

  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        Edge: "left",
        inDuration: 250
    });
  },[]);
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader/>}>
        <Switch>
          <Route exact path= "/" component = {Header} />
          <Route exact path="*" component = {NotFound}/>
        </Switch>
      </Suspense>
    
    </BrowserRouter>
  );
}

export default App;
