import * as actionConst from '../constants/action.constant.jsx';

export const getData = ( data) => {
    return{
         type:actionConst.GET_TOPIC_LIST,
        payload: data
    }
}

export const getQuesAns = ( data) => {
    return{
         type:actionConst.GET_QUES_ANS,
        payload: data
    }
}