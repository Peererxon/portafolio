import React, {Suspense,useEffect } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import NotFound from '../../notfound/NotFount';
import Preloader from '../components/Preloader_line';
//import Header from '../Header';
import Layout from '../Layout';

//Lazy components
const Resume = React.lazy( () => import ('../../resume/Resume') );
const Home = React.lazy( () => import ('../../home/Home') ); //usando code splitting con rutas

//EndLazy components

function App() {

  useEffect(() => {
    var elem = document.querySelector(".sidenav");
    var elem2 = document.querySelector(".tooltipped");
    import ('materialize-css/dist/js/materialize.min.js').then(M => {
      
      var instance = M.Sidenav.init(elem, {
          Edge: "left",
          inDuration: 250
      });
      var tooltip= M.Tooltip.init(elem2,{
        transitionMovement:20,


      });
    })
  },[]);
  return (
    <BrowserRouter basename ={process.env.PUBLIC_URL} >
      <Layout>
        <Suspense fallback={<Preloader/>}>
          <Switch>
            <Route exact path= "/" component = { Home } />
            <Route exact path="/resume" component = { Resume } />
            <Route exact path="*" component = { NotFound }/>
          </Switch>
        </Suspense>
      </Layout>
    
    </BrowserRouter>
  );
}

export default App;
