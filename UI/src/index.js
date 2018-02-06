import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
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


ReactDOM.render(
    <BrowserRouter>
      <Routers/>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
