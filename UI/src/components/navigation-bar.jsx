import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../app/app.css';
import './navigation-bar.css';
import genericAjax from '../common/genericAjax/GenericAjax';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData} from '../actions/actions';


class NavigationBar extends Component {
 constructor(props,context){
     super(props,context);
 }

 routeToList(type){
     let ajaxConfig={
         "urlKey":"script_school",
         "type":type,
         "method": "GET"
     }

     genericAjax( ajaxConfig ).then( (response) =>{
         this.props.getData(response);
         this.context.router.history.push('/script-school/'+type);
     });
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
                <ul className="nav navbar-nav cursor_pos">
                    <li className="active"><a href="#">JS</a></li>
                    <li><a onClick={this.routeToList.bind(this,"es6")}>ES6</a></li>
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

NavigationBar.contextTypes = {
    router:React.PropTypes.object
}
//export default NavigationBar;

function mapStateToProps(state) {
  return {
  };
}

function matchDispatchToProps(dispatch) {
  return (bindActionCreators({
    getData
  }, dispatch));
}
export default (connect(mapStateToProps, matchDispatchToProps)(NavigationBar));
