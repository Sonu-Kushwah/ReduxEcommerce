import {combineReducers} from 'redux';
import {cartReducer} from './Reducer';

//multiple reducer use ke liye
const rootred=combineReducers({
    cartReducer
})

export default rootred;