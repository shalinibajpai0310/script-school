import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NavLink,Link } from 'react-router-dom';
import {data} from '../json/content';
import '../app.css';


class NavigationSection extends Component {

    constructor(props){
        super(props);
    }
    
  componentDidMount = () => {
    
 }

   toggleMenu = (e) =>{
         $(e.target).toggleClass('menu-box-open');
        $(e.target).next().slideToggle('slow').removeClass('open-links');
    }

  render() {
    return (
      <div>
         <div className="logo-text text-center"><Link to='/'><span className="rapid-text">RAPID</span><span className="es6-text">ES6</span></Link></div>
         <div className="tag-line text-center">Your Guide for quick checks</div>
         <div className="row navigation-links-section">
            { data.es6 && data.es6.map ( (topics,index) => {
                return( 
                    <div className="menu-box " key ={index} >
                    <div className="menu" onClick={this.toggleMenu}>{topics.menu}</div>
                        <ul  className="menu-items list-unstyled">
                        { topics.sub_menu && topics.sub_menu.map( (subTopic,ind)=>{
                            return( <li key={ind}><NavLink  to={`/es6/${Object.keys(subTopic)[1]}`}>{subTopic.sub_menu_name}</NavLink></li>)
                        })}
                        </ul>                        
                    </div>
                );
            })}
            </div>
        </div>
    );
  }
}

export default NavigationSection;
