import * as actionConst from '../constants/action.constant.jsx';

export default function (state = null, action) {
    switch (action.type) {
    case actionConst.GET_QUES_ANS:
       return action.payload;
       break;
    }
    return state
}