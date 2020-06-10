import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import roomTypeReducer from "../reducers/roomTypeReducer";
import globalLoadingReducer from "../reducers/globalLoadingReducer";
import guestReducer from "./guestReducer";
import hotelReducer from "./hotelReducer";
import promotionReducer from './promotionReducer';
const myReducer = combineReducers({
  showLoading: globalLoadingReducer,
  login: loginReducer,
  roomType: roomTypeReducer,
  guest: guestReducer,
  hotels: hotelReducer,
  promotions: promotionReducer
});
export default myReducer;
