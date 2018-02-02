import React, { Component } from 'react';
import '../app.css';


class HomePageContent extends Component {
 constructor(props){
     super(props);
 }

 componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => console.log("users ",users));
 }
  render() {
    return (
      <div>
          <h2 className="content-heading text-center">
                JavaScript is changing
            </h2>
            <div className="up-to-date-text text-center">Here's how to stay up to date !!!</div>
            <p className="content">ES6 is a major update to JavaScript that includes dozens of new features.
                With a focus on simplicity and readability, this course is an efficient way to find out what is new in JavaScript and most importantly when and how you should use it.</p>
            <p>Rapid ES6 Training, will help you to do that. You'll cover major new features including Iterators, Generators, symbols, and a built-in Promise library. You'll also learn about arrays collections. Finally, you'll discover the new meta-programming features with the Reflect API and Proxy API. By the end of this course, you will have a foundational knowledge of one of the latest web language features, ES6, and you'll be able to use it to write your code better.</p>
        
        </div>
    );
  }
}

export default HomePageContent;
