import React from 'react';
import data from './ServiceURL';

export default function (ajaxConfig){
  let tempURL = '';

  if(typeof ajaxConfig === "string"){
    Object.keys(data).forEach(function(key,index) {
      if(ajaxConfig == key){
        tempURL = data[key];
      }
    });
  }
  else {
    Object.keys(data).forEach(function(key,index) {
      if(ajaxConfig["urlKey"] == key){
        tempURL = data[key];
        let i = 0;
        Object.keys(ajaxConfig).forEach(function(config, len) {
          if(config != 'authToken' && config!='urlKey' && config!='method' && config !='data' && config != 'async' && config != 'hideProgress' && config != 'emptyResponse' && config != 'customizedErrorCode'){
            if(!i) {
              tempURL += '?' + config + '=' + ajaxConfig[config];
              i++;
            } else {
              tempURL += '&'+ config + '=' + ajaxConfig[config];
            }
          }
        });
      }
    });
  }

  return tempURL;
}
