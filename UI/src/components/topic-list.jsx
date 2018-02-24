import React, { Component } from 'react';
import '../app.css';
import { NavLink,Link } from 'react-router-dom';
import {data} from '../json/content';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class TopicList extends React.Component{
    constructor(props){
        super(props);
        this.topic_list = [];
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

    componentDidMount(){
    }

    render(){
        let count = 0;
        const renderTopic = function(topic,index){
            count++;
            if( count < 10)
                return(<div className="sc-topic-size">
                        <Link to={`/script-school/es6/${topic.routeKey}`}><span>{topic.topicName}</span></Link>
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


export default TopicList;

