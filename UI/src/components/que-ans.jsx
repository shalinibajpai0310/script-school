import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import genericAjax from '../common/genericAjax/GenericAjax';
import beautify  from 'js-beautify';
import $ from 'jquery';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import '../app.css';
import {connect} from 'react-redux';
import {getData,getQuesAns} from '../actions/actions';
import {bindActionCreators} from 'redux';
import {data} from '../json/content';



class QuesAnswer extends Component {
 constructor(props,context){
     super(props,context);
     this.state = {load:false};
     }
 
 toggleAns= (e) => {
     $(e.target).toggleClass('show-ans-active');
        //$(this).parent().next().toggleClass('open', 1000);
        $(e.target).parent().next().slideToggle('slow');
 }

 componentDidMount = () => {
     let topic = this.props.topic;
     if( this.props.quesAns === null){
          let ajaxConfig={
                "urlKey":"script_school",
                "type":"es6",
                "topic": topic,
                "method": "GET"
            }

             genericAjax( ajaxConfig ).then( (response) =>{
                 console.log(response);
                this.props.getQuesAns(response);
            });
     }
 }
componentWillMount = () =>{
    console.log("willMount called");
}

componentWillReceiveProps = () =>{
    console.log("componentWillReceiveProps");
    if(document.querySelector('.show-ans-active') ){
        const activeAnswerArray = document.querySelectorAll('.show-ans-active');
        console.log(Array.from(activeAnswerArray));
        Array.from(activeAnswerArray).map(  doc => {
            doc.classList.remove('show-ans-active');
        })
        const showAnsBlock = document.getElementsByClassName('show-answer');
          Array.from(showAnsBlock).map( ans => {
            ans.style.display = "none";
        })
    }
}
  render() {
      console.log("render called");
      const divStyle={
          display:'none'
      }
      const topic = this.props.topic;
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
                { this.props.quesAns && this.props.quesAns.map( (list , index ) => {
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

//export default QuesAnswer;
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
export default (connect(mapStateToProps, matchDispatchToProps)(QuesAnswer));
