import React, { Component } from 'react';
import '../app.css';

class TopicList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
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