import React, { Component } from 'react';
import '../app/app.css';
import './topic-list.css';
import { NavLink,Link } from 'react-router-dom';
import genericAjax from '../common/genericAjax/GenericAjax';
import {data} from '../json/content';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData,getQuesAns} from '../actions/actions';


class TopicList extends React.Component{
    constructor(props){
        super(props);
        this.topic_list = [];
        this.routeToTopic=this.routeToTopic.bind(this)
    }
    
    componentWillMount(){
        data.es6 && data.es6.map(( topics , index ) => {
           topics.sub_menu && topics.sub_menu.map( subtopic => {
               let key = Object.keys(subtopic)[1];
               let obj = {
                   'topicName' : subtopic.sub_menu_name,
                   'routeKey' : key
               }
               this.topic_list.push(obj);
           })
        })

    }

    routeToTopic( topic){
         ///let type= this.props.type.split('/');
          let ajaxConfig={
                "urlKey":"script_school",
                "type":"es6",
                "topic": topic,
                "method": "GET"
            }

             genericAjax( ajaxConfig ).then( (response) =>{
                this.props.getQuesAns(response);
            });
    }


    render(){
        let count = 0;
        var renderTopic = (topic,index) => {
            let me = this;
            count++;
            if( count < 10)
                return(<div className="sc-topic-size" key={index} onClick={me.routeToTopic.bind(this,topic.routeKey)}>
                        <NavLink to={`/script-school/es6/${topic.routeKey}`}><span>{topic.topicName}</span></NavLink>
                    </div>)
        }
        return(<section className="container-fluid sc-inner-grid">
                <div className="sc-topic-list-grid container">
                    <div className="row">
                        <div className="col-xs-1"></div>
                        <div className="col-xs-10">
                            <div className="row">
                                <div className="col-xs-12 sc-topics-explore">
                                    Explore By Topics
                                </div>
                            </div>
                            <div className="row sc-topic-list">
                                <div className="col-xs-3 ">
                                    <div className="sc-topic-style-odd">JS</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                </div>
                                <div className="col-xs-3">
                                    <div className="sc-topic-style-even">ES6</div>
                                    {this.topic_list.map(renderTopic)}
                                </div>
                                <div className="col-xs-3">
                                    <div className="sc-topic-style-odd">ReactJS</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                </div>
                                <div className="col-xs-3 sc-algo">
                                    <div className="sc-topic-style-even">Algorithms</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                    <div className="sc-topic-size">JavaScript Topic 1</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 sc-topic-btn">
                                    <button className="btn btn-primary btn-sm sc-topic-list-btn">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-1"></div>
                    </div>
                </div>
        </section>)
    }
}


//export default TopicList;

function mapStateToProps(state) {
  return {
      quesAns: state.getQuesAnswers

  };
}

function matchDispatchToProps(dispatch) {
  return (bindActionCreators({
      getQuesAns
  }, dispatch));
}
export default (connect(mapStateToProps, matchDispatchToProps)(TopicList));
