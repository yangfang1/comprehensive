import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './Router/Route';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './Redux/configureStore';
const store=configureStore();
ReactDOM.render(
    (//还可以通过<App store = { store }>传递store>
      <Provider store = { store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ), 
    document.getElementById('root'));
    serviceWorker.unregister();
