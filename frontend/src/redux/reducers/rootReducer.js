import { combineReducers } from 'redux';
import login from './loginReducer';
const myReducer = combineReducers({
    login : login
})
export default myReducer;