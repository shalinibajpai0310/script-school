import React, { Component } from 'react';
import '../app.css';

class Subscribe extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(<section className="container-fluid sc-inner-grid">
            <div className="sc-topic-list-grid container">
                <div className="row">
                    <div className="col-xs-1"></div>
                    <div className="col-xs-10">
                        <div className="row sc-subscribe-row">
                            <div className="col-xs-4 sc-subscribe-border">
                                <div className="sc-feedback-text-style1">
                                        <span>Follow Us</span>
                                </div>
                                <div className="sc-subscribe-text-style">
                                    <div>Facebook</div>
                                    <div>Twitter</div>
                                </div>
                            </div>
                            <div className="col-xs-8 sc-subscribe-container">
                                 <div className="sc-feedback-text-style1">
                                    <span>Get Updates directly to your Inbox</span>
                                </div>
                                <div className="sc-subscribe-mail">
                                    <input type="text" placeholder="Tell Us your Email Id" />
                                    <button className="btn btn-danger sc-subscribe-btn">Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-1"></div>
                </div>
            </div>
        </section>)
    }
}

export default Subscribe;