import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import './index.css';
//import App from './app';
import HomePageContent from './components/homepage-content';
import QuesAnswer from './components/que-ans';
import HomePage from './HomePage';
import Routers from './routers';
import App from './app';
import './app.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routers/>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
