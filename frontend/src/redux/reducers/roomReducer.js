import produce from "immer";
import {
  FETCH_LIST_HOTEL_OPTION_SUCCESS,
  SELECT_BRAND_OF_HOTEL,
  GET_ALL_ROOM_BY_BRANDID_SUCCESS,
  RESET_ROOMS_STATE_ON_REDUX,
  PUSH_ROOM_ITEM_DATA_TO_STORE,
} from "redux/actionTypes/roomActionType";

const initialState = {
  listHotel: [],
  brandSelected: {},
  brandSelected1:null,
  listRoomOfBrand: [],
  hotelSelected:null,
  roomSelected: {
    roomType: {},
    brand: {},
  },
};
const myReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_LIST_HOTEL_OPTION_SUCCESS:
        draft.listHotel = action.payload;
        return draft;
      case SELECT_BRAND_OF_HOTEL:
        draft.brandSelected = action.payload;
        draft.brandSelected1 = action.payload;
        return draft;
      case "SET_HOTEL_SELECTED":
        draft.hotelSelected = action.payload;
        return draft;
      case GET_ALL_ROOM_BY_BRANDID_SUCCESS:
        draft.listRoomOfBrand = action.payload;
        return draft;
      case RESET_ROOMS_STATE_ON_REDUX:
       // draft.brandSelected = {};
        draft.listRoomOfBrand = [];
        return draft;
      case PUSH_ROOM_ITEM_DATA_TO_STORE:
        draft.roomSelected = action.payload;
        return draft;
      case "RESET_ROOM_STORE":
        return {
          listHotel: [],
          brandSelected: {},
          brandSelected1:null,
          listRoomOfBrand: [],
          hotelSelected:null,
          roomSelected: {
            roomType: {},
            brand: {},
          }
        }
      default:
        return draft;
    }
  });
};
export default myReducer;
