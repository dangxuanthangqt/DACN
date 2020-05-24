import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import roomTypeReducer from '../reducers/roomTypeReducer';
import globalLoadingReducer from '../reducers/globalLoadingReducer'
import guestReducer from './guestReducer';
const myReducer = combineReducers({
    showLoading: globalLoadingReducer,
    login : loginReducer,
    roomType: roomTypeReducer,
    guest : guestReducer
})
export default myReducer;