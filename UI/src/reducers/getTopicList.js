import * as actionConst from '../constants/action.constant.jsx';

export default function (state = null, action) {
    switch (action.type) {
    case actionConst.GET_TOPIC_LIST:
       return action.payload;
       break;
    }
    return state
}