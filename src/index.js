import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//traduccion de idiomas
import './i18n';

import Portafolio from './shared/routes/App';

import * as serviceWorker from './serviceWorker';
//redux
import { Provider } from 'react-redux';
import  store  from './shared/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <Portafolio />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
