import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import beautify  from 'js-beautify';
import $ from 'jquery';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import '../app.css';
import {data} from '../json/content';



class QuesAnswer extends Component {
 constructor(props){
     super(props);
     this.state = {load:false};
     }
 
 toggleAns= (e) => {
     $(e.target).toggleClass('show-ans-active');
        //$(this).parent().next().toggleClass('open', 1000);
        $(e.target).parent().next().slideToggle('slow');
 }

 componentDidMount = () => {
     ReactDOM.findDOMNode(this).getElementsByClassName('snap')
     console.log("didMount callled");
 }
componentWillMount = () =>{
    console.log("willMount called");
}

componentWillReceiveProps = () =>{
    console.log("componentWillReceiveProps");

}
  render() {
      console.log("render called");
      const divStyle={
          display:'none'
      }
      const topic = this.props.match.params.topic;
      let questions = [],title = '';
      data.es6.filter( (topics)=>{
                topics.sub_menu.map((sub_topic) => {
                    if( Object.keys(sub_topic)[1] === topic){
                        questions =  sub_topic[topic];
                        title=sub_topic.sub_menu_name;
                    }
                });
      });
    return (
      <div>
          <div className="topic-header text-center">{title}</div>
                { questions && questions.map( (list , index ) => {
                    return (
                        <div className="question-set-section" key={index}>  
                            <div className="console-question">{index+1}. What shows in the console ?</div>
                            <div className="question-block">
                                { list.fileName  &&  list.fileName.map(( r,i) =>{
                                    return(<div key={i}><Highlight language="javascript">
                                         <u>{r.name}</u><br/><br/>
                                        <div>{beautify(r.question)}</div>
                                    </Highlight></div>)
                                })}
                                { list.question && <div><Highlight language="javascript">
                                  { beautify(list.question) }
                                </Highlight></div>}
                            </div>
                             <div className="answer-section">
                                <div className="show-answer-text" onClick={this.toggleAns}>Show Answer</div>
                            </div>
                                {list.answer && list.answer.map ( (ans,index) =>{
                                    return(
                                        <div className="show-answer"  key={index} style={divStyle}>
                                            <div>{ans}</div>
                                        </div>
                                    )
                                })}
                        </div>
                    )
                }) }
        </div>
    );
  }
}

export default QuesAnswer;
