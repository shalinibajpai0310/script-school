import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import errorFetcher from './ErrorFetcher'
import PNotify from '../../../node_modules/pnotify/dist/iife/PNotify.js';
import '../../../node_modules/pnotify/dist/PNotifyBrightTheme.css';
//import { I18n } from 'react-redux-i18n';

export 	function showMessage (data){
    let notice = new PNotify({
			title: data.title,
			text: data.text,
			type: data.type,
			hide: data.hide,
			delay: data.delay,
			remove: true
    });
    let me = this;
    notice.get().click(function(e) {
      //PNotify.removeAll();
      if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)){
         notice.remove();
      };
    });
    return notice;
  }
export default function (typeOfNotification , status , path , errorObj){

  let actualError = '';
  let pathText = '';
  if(path && errorObj.response && errorObj.response.data.status != 401){
    pathText=' at context path- '+path;
  }
  if(errorObj && typeof errorObj.response !== "undefined"){
    let messgage = errorObj.response.data.exception || errorObj.response.data.message;
    if(messgage.includes('ZuulException') || errorObj.response.data.status == 401){
         actualError = 'errors.';
         actualError = actualError + errorFetcher(status);
    }
    else{
      actualError = messgage;
      pathText = '';
    }
  }
  else{
    actualError = 'errors.';
    actualError = actualError + errorFetcher(status);
  }
  let titleOfNotification = 'Error !';
  let hideNotice = false;
  let timeout = 6000000;
  if(typeOfNotification === 'info'){
    titleOfNotification = 'Notice';
    hideNotice = true;
    timeout = 2000;
    pathText = '';
    if(errorObj && typeof errorObj.data !== "undefined"){
      if(errorObj.data.statusCode == 100){
        actualError = errorObj.data.message;
      }
    }
  }
  let text = '';
  if(actualError.indexOf('errors.')!=-1){
	  //text = I18n.t(actualError) + pathText;
  }else{
	  text = actualError;
  }
  //if(!document.querySelector(".ui-pnotify")){
    var notice = new PNotify({
      title: titleOfNotification,
      text: text,
      type: typeOfNotification,
      hide: hideNotice,
      delay: timeout,
      remove: true
    });
    notice.get().click(function(e) {
      //PNotify.removeAll();
      if ($('.ui-pnotify-closer, .ui-pnotify-sticker, .ui-pnotify-closer *, .ui-pnotify-sticker *').is(e.target)){
         notice.remove();
      };
    });
  //}
}
