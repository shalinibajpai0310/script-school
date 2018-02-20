import React from 'react';
import urlFetcher from './URLFetcher'
import errorHandler from '../errorHandler/ErrorHandler';
import axios from 'axios';
import nprogress from 'react-nprogress/nprogress.js';

const PROTOCOL="http://";
const HOST="localhost";
const PORT=5000;

export function getURL(){
  let actualUrl = PROTOCOL+HOST;
  if(PORT!=-1){
    actualUrl+=":"+PORT;
  }
  return actualUrl;
}

export default function (ajaxConfig) {
  if(!ajaxConfig.hideProgress) {
    nprogress.start();
  }
  let actualUrl ='', genericErrorCode = 600 , timeOutErrorCode = 408 , noContentErrorCode = 204;
  
	 //for all request
   actualUrl = getURL()+urlFetcher(ajaxConfig);
  

  const firstIndex = actualUrl.split('/', 3).join('/').length;
  const lastIndex = actualUrl.split('?', 1).join('?').length;
  let path = actualUrl.substring(firstIndex, lastIndex);

  //write log to filePath
  let defaultConfig = {
    timeout: 600000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Accept': ajaxConfig.accept || 'application/json',
      'Content-Type': ajaxConfig.content_Type || 'application/json'
    }
  };
  if(!ajaxConfig.hideProgress) {
    nprogress.inc(0.2);
  }

  switch(ajaxConfig["async"]){
    default:
    switch (ajaxConfig["method"]) {
      case 'POST':
      return axios.post(actualUrl , ajaxConfig["data"] , defaultConfig).then(function (response) {
        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }
        if(response.data.statusCode == 100){
          //errorHandler('info' , genericErrorCode , path , response);
          return response.data;
        }
        // if(response.status == 200 && (response.data.results == null || response.data.results == [])){
        //   ajaxConfig.emptyResponse=="error" ? (ajaxConfig.customizedErrorCode ? errorHandler('error' , ajaxConfig.customizedErrorCode, path ) :  errorHandler('error' , noContentErrorCode , path)) : (ajaxConfig.customizedErrorCode ? errorHandler('info' , ajaxConfig.customizedErrorCode , path) : errorHandler('info' , noContentErrorCode , path));
        //   //errorHandler('info' , noContentErrorCode , path)
        // }
        return response.data;
      })
      .catch(function (error) {
        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }
        if(!error.response){
          if(error.code){
            //errorHandler('error' , timeOutErrorCode , path);
          }
          else {
            //errorHandler('error' , genericErrorCode , path , error);
          }
        }else {
          //errorHandler('error' , error.response.status , path , error);
        }
        return error;
      });
      break;

      case 'PUT':
      return axios.put(actualUrl , ajaxConfig["data"] , defaultConfig).then(function (response) {
        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }
        if(response.data.statusCode == 100){
          //errorHandler('info' , genericErrorCode , path , response);
          return response.data;
        }
      //   if(response.status == 200 && (response.data.results == null || response.data.results == [])){
      //     errorHandler('info' , noContentErrorCode , path);
      //  }
        return response.data;
      })
      .catch(function (error) {
        nprogress.done();
        if(!error.response){
          //errorHandler('error' , genericErrorCode);
        }else {
         // errorHandler('error' , error.response.status);
        }
        return error;
      });
      break;

      case 'DELETE':
      return axios.delete(actualUrl , defaultConfig).then(function (response) {
        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }
        // if(response.status == 200 && (response.data.results == null || response.data.results == [])){
        //   errorHandler('info' , noContentErrorCode , path);
        // }
        return response.data;
      })
      .catch(function (error) {
        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }
        if(!error.response){
          //errorHandler('error' , genericErrorCode);
        }else {
          //errorHandler('error' , error.response.status);
        }
        return error;
      });
      break;

      default:
      return axios.get(actualUrl , defaultConfig).then(function (response) {
        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }

        if(response.data.statusCode == 100 && !ajaxConfig["hide_no_routes_found_popover"]){
          //errorHandler('info' , genericErrorCode , path , response);
          return response.data;
        }
        // if(response.status == 200 && (response.data.results == null || response.data.results == [])){
        //   ajaxConfig.emptyResponse=="error" ? ajaxConfig.customizedErrorCode ? errorHandler('error' , ajaxConfig.customizedErrorCode, path ) :  errorHandler('error' , noContentErrorCode , path) : errorHandler('info' , noContentErrorCode , path);
        // }
        return response.data;
      })
      .catch(function (error) {

        if(!ajaxConfig.hideProgress) {
          nprogress.done();
        }
        if(!error.response){
          if(error.code){
            //errorHandler('error' , timeOutErrorCode , path);
          }
          else {
            //errorHandler('error' , genericErrorCode , path , error);
          }
        }else {
          errorHandler('error' , error.response.status , path, error);
        }
        return error;
      });
      break;
    }
    break;

    case 'false':
    var request = new XMLHttpRequest();
    request.open(ajaxConfig["method"] || 'GET', actualUrl , false);  // `false` makes the request synchronous
    request.setRequestHeader("Authorization", ajaxConfig["authToken"]);
    request.setRequestHeader("Accept", 'application/json');
    request.setRequestHeader('Content-Type', 'application/json');
    try{
      request.send(ajaxConfig["data"] || null);
      var response = JSON.parse(request.response);
      if(!ajaxConfig.hideProgress) {
        nprogress.done();
      }

      if(response.statusCode == 100){
        //errorHandler('info' , genericErrorCode , path , response);
        return response;
      }
      // if(response.statusCode == 200 && (response.results == null || response.results == [])){
      //   ajaxConfig.emptyResponse=="error" ? ajaxConfig.customizedErrorCode ? errorHandler('error' , ajaxConfig.customizedErrorCode, path ) :  errorHandler('error' , noContentErrorCode , path) : errorHandler('info' , noContentErrorCode , path);
      //   //errorHandler('info' , noContentErrorCode , response.path);
      // }
      if(response.statusCode !== 200){
        //errorHandler('error' , response.status , response.path);
      }
      return response;
    }
    catch(error){
      if(!ajaxConfig.hideProgress) {
        nprogress.done();
      }
      //errorHandler('error' , genericErrorCode , path , error);
      return error;
    }
    break;
  }
}
