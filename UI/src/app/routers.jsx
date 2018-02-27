import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
//import App from './app';
import HomePage from './HomePage';
import App from './app';
import './app.css';

class Routers extends React.Component{

    componentWillMount(){
    if( window.location.pathname === '/')
      window.location.pathname = '/script-school'
  }

    render(){
        return(
        <Switch>
            <Route exact path='/script-school' component={HomePage}/>
            <Route exact path='/script-school/es6' component={App}/>
            <Route path='/script-school/es6/:topic' component={App}/>
      </Switch>
        )
    }
}

export default Routers;