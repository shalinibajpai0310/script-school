import { combineReducers } from 'redux'
//import { routerReducer } from 'react-router-redux'
import getReducer from '../reducers/getTopicList';
import getQuesAnswers from '../reducers/getQuesAns';

export default combineReducers({
  getReducer,
  getQuesAnswers
})