import $ from 'jquery';
import React, { Component } from 'react';
import '../app.css';

class MobNavigation extends Component {
  constructor(props){
      super(props);
    }

    toggleMenu = () =>{
         $(this.refs['toggle-list']).slideToggle()
        // $(this.refs['toggle-list']).parent().toggleClass('menu-box-open');
       // $(this.refs['toggle-list']).next().slideToggle('slow').removeClass('open-links');
    }

  render() {
    return (
     <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                    <button type="button" className="pull-left navbar-toggle collapsed custom-hamburger" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="logo-text text-center"><a href="../index.html" ><span className="rapid-text">RAPID</span><span className="es6-text">ES6</span></a></div>
                    <div className="tag-line text-center">Your Guide for quick checks</div>
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <div className="row navigation-links-section">
                        <div className="menu-box ">
                            <div className="menu" onClick={this.toggleMenu}>New ES6 Syntax</div>
                            <ul ref="toggle-list" className="menu-items list-unstyled">
                                <li><a href="">let, const and Block Scoping</a></li>
                                <li><a href="">Arrow Functions</a></li>
                                <li><a href="">Default Function Parameters</a></li>
                                <li><a href="">Rest and Spread</a></li>
                                <li><a href="">Object Literal Extensions</a></li>
                                <li><a href="">for...of Loops</a></li>
                                <li><a href="">Octal and Binary Literals</a></li>
                                <li><a href="">Template Literals</a></li>
                                <li><a href="">Destructuring</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">New Types</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Symbols</a></li>
                                <li><a href="">Well-known Symbols</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">Object Extensions</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Object Extensions</a></li>
                                <li><a href="">String Extensions</a></li>
                                <li><a href="">Number Extensions</a></li>
                                <li><a href="">Math Extensions</a></li>
                                <li><a href="">RegExp Extensions</a></li>
                                <li><a href="">Function Extensions</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">ES6 Modules and Classes</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Module Basics</a></li>
                                <li><a href="">Named Exports</a></li>
                                <li><a href="">Classes</a></li>
                                <li><a href="">extends and super</a></li>
                                <li><a href="">Constructor Function</a></li>
                                <li><a href="">Static Members</a></li>
                                <li><a href="">new.target</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">Iterators, Generators</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Iterators</a></li>
                                <li><a href="">Generators</a></li>
                                <li><a href="">Yielding in Generators</a></li>
                                <li><a href="">throw and return</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">Arrays and Collections</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Array Extensions</a></li>
                                <li><a href="">ArrayBuffer and Typed Array</a></li>
                                <li><a href="">DataView and Endianness</a></li>
                                <li><a href="">Map and WeakMap</a></li>
                                <li><a href="">Set and WeakSet</a></li>
                                <li><a href="">Subclassing</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">Promises</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Promises</a></li>
                                <li><a href="">More Promise Features</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">The Reflect API</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Construction and Method Calls</a></li>
                                <li><a href="">Reflect and Prototypes</a></li>
                                <li><a href="">Reflect and Properties</a></li>
                                <li><a href="">Reflect and Property Extensions</a></li>
                            </ul>
                        </div>
                        <div className="menu-box">
                            <div className="menu">The Proxy API</div>
                            <ul className="menu-items list-unstyled">
                                <li><a href="">Get by Proxy</a></li>
                                <li><a href="">Calling Functions by Proxy</a></li>
                                <li><a href="">A Proxy as a Prototype</a></li>
                                <li><a href="">Revocable Proxies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>{/*!-- /.navbar-collapse -->*/}
            </div>
    );
  }
}

export default MobNavigation;
