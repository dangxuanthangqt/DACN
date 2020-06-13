import {
  ADD_ROOM_REQUEST,
  FETCH_LIST_HOTEL_OPTION_REQUEST,
  FETCH_LIST_HOTEL_OPTION_SUCCESS,
  SELECT_BRAND_OF_HOTEL,
  ADD_ROOM_SUCCESS,
  GET_ALL_ROOM_BY_BRANDID_REQUEST,
  GET_ALL_ROOM_BY_BRANDID_SUCCESS
} from "redux/actionTypes/roomActionType";

export const fetchListHotelOptionRequest = () => {
  return {
    type: FETCH_LIST_HOTEL_OPTION_REQUEST,
  };
};
export const fetchListHotelOptionSuccess = (data) => {
  return {
    type: FETCH_LIST_HOTEL_OPTION_SUCCESS,
    payload: data,
  };
};
export const selectBrandOfHotel = (data) => {
  return {
    type: SELECT_BRAND_OF_HOTEL,
    payload: data,
  };
};
export const addRoomRequest = (data) => {
  return {
    type: ADD_ROOM_REQUEST,
    payload: data,
  };
};
export const addRoomSuccess = (data) => {
  return {
    type: ADD_ROOM_SUCCESS,
    payload: data
  };
};
export const getAllRoomByBrandIdRequest=(data)=>{
  return {
    type: GET_ALL_ROOM_BY_BRANDID_REQUEST,
    payload: data
  }
}
export const getAllRoomByBranchIdSuccess=(data)=>{
  return {
    type: GET_ALL_ROOM_BY_BRANDID_SUCCESS,
    payload: data
  }
}
