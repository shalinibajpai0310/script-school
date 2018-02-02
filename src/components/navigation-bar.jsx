import React, { Component } from 'react';
import '../app.css';


class NavigationBar extends Component {
 constructor(props){
     super(props);
 }

 
  render() {
    return (<section className="container sc-header-container">
      <header>
        <div className="row sc-navbar-padding">
            <div className="col-xs-3 ">
                <div><span className="sc-span1-style">SCRIPT</span><span className="sc-span2-style">SCHOOL</span></div>
                <div>Learn Challenge Update</div>
            </div>
            <div className="col-xs-5">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">JS</a></li>
                    <li><a href="#">ES6</a></li>
                    <li><a href="#">ReactJS</a></li>
                    <li><a href="#">AngularJS</a></li>
                    <li><a href="#">Algorithms</a></li>
                </ul>
            </div>
            <div className="col-xs-4">
                 <input type="text" className="sc-nav-searchbar" placeholder="Search Here" />
            </div>
        </div>
        </header>
        
        <div className="row">
            <div className="col-xs-3"></div>
            <div className="col-xs-6">
                <div className="row sc-heading-tag">
                    <div className="col-xs-3">
                        <div className="sc-heading-info-heading">Learn</div>
                        <div className="text-center sc-heading-info-subtext">Keep learning the latest in web technologies</div>
                    </div>
                    <div className="col-xs-5">
                        <div className="sc-heading-info-heading">Challenge</div>
                        <div className="text-center sc-heading-info-subtext">Keep challenging yourself to sharpen your knowledge</div>
                    </div>
                    <div className="col-xs-4">
                        <div className="sc-heading-info-heading">Update</div>
                        <div className="text-center sc-heading-info-subtext">Keep learning the latest in web technologies</div>
                    </div>
                </div>
            </div>
            <div className="col-xs-3"></div>
        </div>
        </section>
    );
  }
}

export default NavigationBar;