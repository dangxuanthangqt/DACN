import {
  FETCH_LIST_HOTEL_REQUEST,
  FETCH_LIST_HOTEL_FAILURE,
  FETCH_LIST_HOTEL_SUCCESS,
} from "redux/actionTypes/hotelActionType";

export const fetchListHotelRequest = () => {
  return {
    type: FETCH_LIST_HOTEL_REQUEST,
  };
};

export const fetchListHotelSuccess = (data) => {
  return {
    type: FETCH_LIST_HOTEL_SUCCESS,
    payload: data,
  };
};

export const fetchListHotelFailure = (error) => {
  return {
    type: FETCH_LIST_HOTEL_FAILURE,
    payload: error,
  };
};
