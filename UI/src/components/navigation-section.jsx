import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import genericAjax from '../common/genericAjax/GenericAjax';
import { NavLink,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData,getQuesAns} from '../actions/actions';
import {data} from '../json/content';
import '../app.css';


class NavigationSection extends Component {

    constructor(props,context){
        super(props,context);
    }
    
  componentDidMount(){
      console.log("active ",document.querySelector('.active'));
      if( document.querySelector('.active')){
             const activeClassLink = document.querySelector('.active').parentElement.parentElement;
            activeClassLink.previousElementSibling.classList.add("menu-box-open");
            activeClassLink.style.display = 'block';
      }
      if(this.props.getList === null){
          
          let type= this.props.type.split('/');
          let ajaxConfig={
         "urlKey":"script_school",
         "type":type[2],
         "method": "GET"
     }
           genericAjax( ajaxConfig ).then( (response) =>{
            console.log("response section",response);
            this.props.getData(response);
     });
      }
 }

 componentWillReceiveProps(){
      console.log("active ",document.querySelector('.active'));
 }

   toggleMenu = (e) =>{
         $(e.target).toggleClass('menu-box-open');
        $(e.target).next().slideToggle('slow').removeClass('open-links');
    }

    routeToTopic = (topic)=>{
         window.scrollTo(0, 0);
          let type= this.props.type.split('/');
          let ajaxConfig={
                "urlKey":"script_school",
                "type":type[2],
                "topic": topic,
                "method": "GET"
            }

             genericAjax( ajaxConfig ).then( (response) =>{
                 console.log(response);
                this.props.getQuesAns(response);
                this.context.router.history.push('/script-school/es6/'+topic);
            });
    }

  render() {

    return (
      <div>
         <div className="logo-text text-center"><Link to='/script-school/es6'><span className="rapid-text">RAPID</span><span className="es6-text">ES6</span></Link></div>
         <div className="tag-line text-center">Your Guide for quick checks</div>
         <div className="row navigation-links-section">
            { this.props.getList && this.props.getList.map ( (topics,index) => {
                return( 
                    <div className="menu-box " key ={index} >
                    <div className="menu" onClick={this.toggleMenu}>{topics.menu}</div>
                        <ul  className="menu-items list-unstyled">
                        { topics.sub_menu_name && topics.sub_menu_name.map( (subTopic,ind)=>{
                            return( <li key={ind}><a onClick={this.routeToTopic.bind(this,subTopic.type)}>{subTopic.sub_topic}</a>
                           {/*<NavLink  to={`/script-school/es6/${subTopic.type}`}>{subTopic.sub_topic}</NavLink>*/}</li>)
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

NavigationSection.contextTypes = {
    router:React.PropTypes.object
}

//export default NavigationSection;

function mapStateToProps(state) {
  return {
      getList: state.getReducer
  };
}

function matchDispatchToProps(dispatch) {
  return (bindActionCreators({
       getData,
       getQuesAns
  }, dispatch));
}
export default (connect(mapStateToProps, matchDispatchToProps)(NavigationSection));