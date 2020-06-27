import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import roomTypeReducer from "../reducers/roomTypeReducer";
import globalLoadingReducer from "../reducers/globalLoadingReducer";
import guestReducer from "./guestReducer";
import hotelReducer from "./hotelReducer";
import promotionReducer from "./promotionReducer";
import roomReducer from "./roomReducer";
import roomReservationReducer from "./roomReservationReducer";
import brandReducer from "./brandReducer";
const myReducer = combineReducers({
  showLoading: globalLoadingReducer,
  login: loginReducer,
  roomType: roomTypeReducer,
  guest: guestReducer,
  hotels: hotelReducer,
  promotions: promotionReducer,
  rooms: roomReducer,
  roomReservation: roomReservationReducer,
  brand: brandReducer,
});
export default myReducer;
