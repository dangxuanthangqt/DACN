import {
  FETCH_LIST_HOTEL_REQUEST,
  FETCH_LIST_HOTEL_FAILURE,
  FETCH_LIST_HOTEL_SUCCESS,
  ADD_HOTEL_REQUEST,
  FETCH_PAGINATION_HOTEL_REQUEST,
} from "redux/actionTypes/hotelActionType";

export const fetchListHotelRequest = () => {
  return {
    type: FETCH_LIST_HOTEL_REQUEST,
  };
};

export const fetchListHotelSuccess = (data, count) => {
  return {
    type: FETCH_LIST_HOTEL_SUCCESS,
    payload: {
      data,
      count,
    },
  };
};

export const fetchListHotelFailure = (error) => {
  return {
    type: FETCH_LIST_HOTEL_FAILURE,
    payload: error,
  };
};

export const addNewHotel = (data) => {
  return {
    type: ADD_HOTEL_REQUEST,
    payload: data,
  };
};

export const fetchPaginationHotel = (paginationData) => {
  return {
    type: FETCH_PAGINATION_HOTEL_REQUEST,
    payload: paginationData,
  };
};
