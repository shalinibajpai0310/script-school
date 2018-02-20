import React from 'react';
import errors from './ErrorList';

export default function (status){    
    let tempError = '';

    Object.keys(errors).forEach(function(key,index) {
            if(status == key){
                tempError = errors[key];
            }
        });
    return tempError;
}
