import Counter from './CounterReducer';
import Logged from './IsLogged';
import {combineReducers} from 'redux';

const allreducers = combineReducers({
    'counter' : Counter,
    'log' : Logged
})

export default allreducers;