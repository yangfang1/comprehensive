import React from 'react';
import ReactDOM from 'react-dom';
import App from './Router/Route';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './Redux/configureStore';
const store=configureStore();
ReactDOM.render(
    (//还可以通过<App store = { store }>传递store>
      <Provider store = { store }>
        <App />
      </Provider>
    ), 
    document.getElementById('root'));
    serviceWorker.unregister();
