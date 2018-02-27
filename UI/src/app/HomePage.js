import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import './app.css';
import React, { Component } from 'react';
import NavigationBar from '../components/navigation-bar';
import CourseList from '../components/course-list';
import Footer from '../components/footer.jsx';
import TopicList from '../components/topic-list';
import FeedBack from '../components/feedback';
import Subscribe from '../components/subscription';

class HomePage extends Component {

 constructor(props){
     super(props);
 }

  componentDidMount(){

  }

  componentWillMount(){
  }

  render() {
    return (
      <div>
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

export default HomePage;
