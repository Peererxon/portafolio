import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './i18n';

import Portafolio from './shared/routes/App';

import * as serviceWorker from './serviceWorker';

export const contextoPadre = React.createContext()
const idiomas = {
  "español": [
      {nombre:"anderson",apellido:"gil"},
      {texto1:"crallon",parrafo:"eres un webon"}
  ],
};

//export const [ idioma,setIdioma ] = useState("")

ReactDOM.render(
  <React.StrictMode>
    <contextoPadre.Provider value = {idiomas}>
      <Portafolio />
    </contextoPadre.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
