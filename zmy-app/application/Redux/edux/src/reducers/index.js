import CounterReducer from './counter';
import isLog from './islog'
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    counter:CounterReducer,
    idLogged:isLog
})
export default allReducers;