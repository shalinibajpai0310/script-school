import React, { Component } from 'react';
import '../app.css';

class FeedBack extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<section className="container-fluid sc-feedback-inner-grid">
                <div className="sc-feedback-outer-grid container">
                    <div className="row">
                        <div className="col-xs-1"></div>
                        <div className="col-xs-10">
                            <div className="row sc-feedback-padding">
                                <div className="col-xs-6 ">
                                    <div className="sc-feedback-text-style1">
                                        <span>Have Any suggestion?</span>
                                    </div>
                                    <div className="sc-feedback-text-style2">Drop us a mail</div>
                                </div>
                                <div className="col-xs-6 sc-feedback-suggestion sc-feedback-border">
                                    <div className="row">
                                        <div className="col-xs-12 sc-feedback-container">
                                            <div className="sc-feedback-ques">
                                                <span>Can you give us more elaborated explanations</span><span>User 1</span>
                                            </div>
                                             <div className="sc-feedback-ques">
                                                <span>Can you give us more elaborated explanations</span><span>User 1</span>
                                            </div>
                                             <div className="sc-feedback-ques">
                                                <span>Can you give us more elaborated explanations</span><span>User 1</span>
                                            </div>
                                             <div className="sc-feedback-ques">
                                                <span>Can you give us more elaborated explanations</span><span>User 1</span>
                                            </div>
                                             <div className="sc-feedback-ques">
                                                <span>Can you give us more elaborated explanations</span><span>User 1</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-xs-11 sc-feedback-btn-container">
                            <button className="btn btn-primary btn-sm sc-topic-list-btn">View All</button>
                        </div>
                    </div>
                </div>
        </section>)
    }
}

export default FeedBack;