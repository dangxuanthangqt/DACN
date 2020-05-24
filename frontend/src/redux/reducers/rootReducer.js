import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import roomTypeReducer from '../reducers/roomTypeReducer';
import globalLoadingReducer from '../reducers/globalLoadingReducer'
const myReducer = combineReducers({
    showLoading: globalLoadingReducer,
    login : loginReducer,
    roomType: roomTypeReducer
})
export default myReducer;