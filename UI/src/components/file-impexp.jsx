import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import beautify  from 'js-beautify';
import hljs from 'highlight.js/lib/highlight';
import $ from 'jquery';
//import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/tomorrow-night-eighties.css';
import '../app.css';



class FileImpExp extends Component {
 constructor(props){
     super(props);
     //this.abc = this.abc.bind(this);
     console.log("ewerr")
     }

     componentDidMount() {
      console.log("componentDidMount");
        this.highlightCode();
        //this.setState({load:!this.state.load});
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
       
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
         this.highlightCode();
    }
    highlightCode() {
        const domNode = ReactDOM.findDOMNode(this);
        const nodes = domNode.querySelectorAll('pre code');

        let i;
        for (i = 0; i < nodes.length; i++) {
            hljs.highlightBlock(nodes[i]);
        }
    }

    //  abc(){
    //       let renderDiv = null;
    //  console.log(this.props,  ' this.props')
    //  if( this.props.content.fileName1 && this.props.content.fileName2){
    //       renderDiv = <Highlight language="javascript"><div><i><u>{this.props.content.fileName1}</u></i><br/><br/>{ beautify(this.props.content.question1) }
    //                     <div><i><u>{this.props.content.fileName2}</u></i><br/><br/>{ beautify(this.props.content.question2) }</div></div> </Highlight>
    //   }else if(this.props.content.fileName1 ){
    //       renderDiv = <Highlight language="javascript"><div><i><u>{this.props.content.fileName1}</u></i><br/><br/>
    //                     { beautify(this.props.content.question1) }</div> </Highlight>
    //   }else if( this.props.content.fileName2 ){
    //       renderDiv =  <Highlight language="javascript"><div><i><u>{this.props.content.fileName2}</u></i><br/><br/>
    //                     { beautify(this.props.content.question2) }</div>  </Highlight>  
    //   }
    // return renderDiv;
    //  }
 
  render() {   
      console.log("props ",this.props.data);
    return (
      <div>{ this.props.data.map( (que,i) => {
          return(
          <pre key={i}><code>
            <u>{que.name}</u><br/><br/>
            <div>{beautify(que.question)}</div></code></pre>)
      })}</div>   
       
    );
  }
}

export default FileImpExp;
