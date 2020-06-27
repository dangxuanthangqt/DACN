import {
  FETCH_LIST_HOTEL_REQUEST,
  FETCH_LIST_HOTEL_FAILURE,
  FETCH_LIST_HOTEL_SUCCESS,
  ADD_HOTEL_REQUEST,
  EDIT_HOTEL_REQUEST,
  DELETE_HOTEL_REQUEST,
  FETCH_PAGINATION_HOTEL_REQUEST,
  FETCH_HOTEL_DETAIL_REQUEST,
  FETCH_HOTEL_DETAIL_REQUEST_FAILURE,
  FETCH_HOTEL_DETAIL_REQUEST_SUCCESS,
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

export const editHotel = (data) => {
  return {
    type: EDIT_HOTEL_REQUEST,
    payload: data,
  };
};

export const fetchPaginationHotel = (paginationData) => {
  return {
    type: FETCH_PAGINATION_HOTEL_REQUEST,
    payload: paginationData,
  };
};

export const fetchDetailHotelRequest = (id) => {
  return {
    type: FETCH_HOTEL_DETAIL_REQUEST,
    payload: id,
  };
};

export const fetchDetailHotelSuccess = (data) => {
  return {
    type: FETCH_HOTEL_DETAIL_REQUEST_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchDetailHotelFailure = (error) => {
  return {
    type: FETCH_HOTEL_DETAIL_REQUEST_FAILURE,
    payload: error,
  };
};

export const deleteHotel = (data) => {
  return {
    type: DELETE_HOTEL_REQUEST,
    payload: data,
  };
};
