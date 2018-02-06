import React, { Component } from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import HomePageContent from './homepage-content';
import QuesAnswer from './que-ans';
import HomePage from '../HomePage';
import App from '../app';
import '../app.css';


class ContentSection extends Component {
 constructor(props){
     super(props);
 }
  render() {
    return (
      <Switch>
        <Route exact path='/script-school' component={HomePage}/>
        <Route exact path='/script-school/es6' component={App}/>
        <Route path='/script-school/es6/:topic' component={QuesAnswer}/>
      </Switch>
    );
  }
}

export default ContentSection;
