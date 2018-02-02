import '../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import './app.css';
import React, { Component } from 'react';
import HighLight from 'react-syntax-highlight';
import beautify  from 'js-beautify';
import MobNavigation from './components/mob-navigation';
import NavigationSection from './components/navigation-section';
import ContentSection from './components/content-section';
import RightInfoSection from './components/right-info-section';
import NavigationBar from './components/navigation-bar';
import CourseList from './components/course-list';
import Footer from './components/footer.jsx';
import TopicList from './components/topic-list';
import FeedBack from './components/feedback';
import Subscribe from './components/subscription';
//import { originalFlow } from './json/sampleFlowData.js';


class App extends Component {
  componentDidMount(){

  }

  componentWillMount(){
    if( window.location.pathname == '/')
      window.location.pathname = '/es6'

    // if( window.location.pathname !== '/es6' && window.location.pathname !== '/es6/')
    //   window.location.pathname = '/es6'

  }

  render() {
    return (
      <div>
        {/*<div className="row">
          <nav className="mobile-nav-bar-section navbar navbar-default navbar-fixed-top">
            <MobNavigation/>
          </nav>
          <div className="col-sm-4 col-md-3 col-lg-3 navigation-section">
            <NavigationSection/>
          </div>
          <div className="col-sm-6 col-md-7 col-lg-7 content-section mobile-content">
            <ContentSection/>
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2 right-info-section">
            <RightInfoSection/>
          </div>
        </div>*/}
        <NavigationBar />
        <CourseList />
        <TopicList/>
        <FeedBack/>
        <Subscribe/>
        <Footer />
      </div>
    );
  }
}

export default App;
