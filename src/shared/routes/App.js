import React, {Suspense } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import './App.scss';
import 'materialize-css/dist/css/materialize.min.css';
import NotFound from '../../notfound/NotFount';
import Preloader from '../components/Preloader_line';
//import Header from '../Header';
//import Layout from '../Layout';

//Lazy components
const Layout = React.lazy( () => import ('../Layout') );
const Resume = React.lazy( () => import ('../../resume/Resume') );
const Home = React.lazy( () => import ('../../home/Home') ); //usando code splitting con rutas

//EndLazy components

function App() {
  return (
    <BrowserRouter basename ={process.env.PUBLIC_URL} >
        <Suspense fallback={<Preloader/>}>
          <Layout>
            <Suspense fallback={<Preloader/>}>
              <Switch>
                <Route exact path= "/" component = { Home } />
                <Route exact path="/resume" component = { Resume } />
                <Route exact path="*" component = { NotFound }/>
              </Switch>
            </Suspense>
          </Layout>
        </Suspense>
    
    </BrowserRouter>
  );
}

export default App;
