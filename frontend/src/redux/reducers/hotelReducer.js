import {
  FETCH_LIST_HOTEL_FAILURE,
  FETCH_LIST_HOTEL_SUCCESS,
  FETCH_HOTEL_DETAIL_REQUEST_SUCCESS,
  FETCH_HOTEL_DETAIL_REQUEST_FAILURE,
} from "../actionTypes/hotelActionType";
import produce from "immer";

import { toastifyError, toastifySuccess } from "helper/Toastify";

const initialState = {
  listHotel: [],
};

var myReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_LIST_HOTEL_SUCCESS: {
        draft.listHotel = action.payload.data;
        draft.count = action.payload.count;
        return draft;
      }
      case FETCH_LIST_HOTEL_FAILURE: {
        let message = action.payload.data.debugMessage
          ? action.payload.data.debugMessage
          : action.payload.data.error;
        toastifyError(`${action.payload.status}: ${message}`);
        return draft;
      }
      case FETCH_HOTEL_DETAIL_REQUEST_SUCCESS: {
        draft.hotelDetail = action.payload.data;
        return draft;
      }
      case FETCH_HOTEL_DETAIL_REQUEST_FAILURE: {
        let message = action.payload.data.debugMessage
          ? action.payload.data.debugMessage
          : action.payload.data.error;
        toastifyError(`${action.payload.status}: ${message}`);
        return draft;
      }
      default:
        return draft;
    }
  });

export default myReducer;
