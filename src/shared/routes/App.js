import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';
import Preloader from '../components/Preloader_line';
import store from '../redux/store';

//import Header from '../Header';
//import Layout from '../Layout';

//Lazy components
const NotFoundPromise = import( /* webpackChunkName: "notFoundLazyPromise" */ '../../notfound/NotFount' );
const reactReduxModal = import( /* webpackChunkName: "flexModalLibraryPromise" */ 'react-redux-modal-flex' );
//esto lo que hace es que notFound se cargue en la primera carga PERO no impida el flujo del render es decir carga en paralelo a la vista actual

const NotFound = React.lazy( ()=> NotFoundPromise );
const Modal = React.lazy( ()=> reactReduxModal );
const Layout = React.lazy( () => import ( /* webpackChunkName: "LayoutLazy" */ '../Layout' ) );
const Resume = React.lazy( () => import ( /* webpackChunkName: "ResumeLazy" */ '../../resume' ) );
const Work = React.lazy( () => import ( /* webpackChunkName: "WorkLazy" */ '../../work' ) );
const Home = React.lazy( () => import ( /* webpackChunkName: "HomeLazy" */ '../../home/Home' ) ); //usando code splitting con rutas
//EndLazy components

// eslint-disable-next-line brace-style
function App() {

  return (
    <BrowserRouter basename ={process.env.PUBLIC_URL} >
      <Suspense fallback={<Preloader/>}>
        <Layout>
          <Suspense fallback={<Preloader/>}>
            <Switch>
              <Route exact path= "/" component = {Home} />
              <Route exact path="/resume" component = {Resume} />
              <Route exact path="/work" component = {Work} />
              <Route exact path="*" component = {NotFound}/>
            </Switch>
          </Suspense>
        </Layout>
        <Modal store= {store}/>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
