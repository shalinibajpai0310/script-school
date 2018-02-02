import React, { Component } from 'react';
import '../app.css';

class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<footer className="container-fluid sc-footer">
            <div className="row sc-footer-text">
                <div className="col-xs-1"></div>
                <div className="col-xs-10 sc-footer-container">
                    <div className="row">
                        <div className="col-xs-3">
                            <div><span className="sc-footer-span1-style">SCRIPT</span><span className="sc-footer-span2-style">SCHOOL</span></div>
                            <div>Learn Challenge Update</div>
                            <div className="sc-footer-title-desc">Script School is a platform where people can get updates regarding web tecnologies</div>
                        </div>
                        <div className="col-xs-6 sc-footer-border">
                            <div className="row">
                                <div className="col-xs-6 sc-footer-desc">
                                    <div className="sc-footer-list">JS</div>
                                    <div className="sc-footer-list">ES6</div>
                                    <div className="sc-footer-list">ReactJS</div>
                                    <div className="sc-footer-list">Algorithms</div>
                                    <div className="sc-footer-list">AngularJS</div>
                                </div>
                                <div className="col-xs-6 sc-footer-desc">
                                    <div className="sc-footer-list">JS</div>
                                    <div className="sc-footer-list">ES6</div>
                                    <div className="sc-footer-list">ReactJS</div>
                                    <div className="sc-footer-list">Algorithms</div>
                                    <div className="sc-footer-list">AngularJS</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-3 sc-footer-follow">
                            Follow Us
                        </div>
                    </div>
                </div>
                <div className="col-xs-1"></div>
            </div>
            <div className="row sc-footer-down">
                <div className="col-xs-1"></div>
                <div className="col-xs-10 sc-footer-text-down">
                    @ScriptSchool 2017.All rights Reserved
                </div>
            </div>
        </footer>)
    }
    
}

export default Footer;