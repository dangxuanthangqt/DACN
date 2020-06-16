import {
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  FETCH_LIST_HOTEL_OPTION_REQUEST,
  FETCH_LIST_HOTEL_OPTION_SUCCESS,
  GET_ALL_ROOM_BY_BRANDID_REQUEST,
  GET_ALL_ROOM_BY_BRANDID_SUCCESS,
  RESET_ROOMS_STATE_ON_REDUX,
  SELECT_BRAND_OF_HOTEL,
  PUSH_ROOM_ITEM_DATA_TO_STORE,
  EDIT_ROOM_REQUEST,
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
    payload: data,
  };
};
export const getAllRoomByBrandIdRequest = (data) => {
  return {
    type: GET_ALL_ROOM_BY_BRANDID_REQUEST,
    payload: data,
  };
};
export const getAllRoomByBranchIdSuccess = (data) => {
  return {
    type: GET_ALL_ROOM_BY_BRANDID_SUCCESS,
    payload: data,
  };
};
export const resetStateOnRedux = () => {
  return {
    type: RESET_ROOMS_STATE_ON_REDUX,
  };
};
export const deleteRoomRequest = (data) => {
  return {
    type: DELETE_ROOM_REQUEST,
    payload: data,
  };
};
export const deleteRoomSuccess = () => {
  return {
    type: DELETE_ROOM_SUCCESS,
  };
};
export const pushRoomItemDataToStore =(data)=>{
  return {
    type : PUSH_ROOM_ITEM_DATA_TO_STORE,
    payload: data
  }
}
export const editRoomRequest =(data)=>{
  return {
    type : EDIT_ROOM_REQUEST,
    payload :data
  }
}