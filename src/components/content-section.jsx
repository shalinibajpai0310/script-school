import React, { Component } from 'react';
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import HomePageContent from './homepage-content';
import QuesAnswer from './que-ans';
import '../app.css';


class ContentSection extends Component {
 constructor(props){
     super(props);
 }
  render() {
    return (
      <Switch>
        <Route exact path='/es6' component={HomePageContent}/>
        <Route path='/es6/:topic' component={QuesAnswer}/>
      </Switch>
    );
  }
}

export default ContentSection;
