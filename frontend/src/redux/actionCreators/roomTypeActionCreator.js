import {
  FETCH_ROOMTYPE_DETAIL_REQUEST,
  FETCH_ROOMTYPE_DETAIL_SUCCESS,
  FETCH_ROOMTYPE_DETAIL_ERROR,
  FETCH_LIST_ROOMTYPE_REQUEST,
  FETCH_LIST_ROOMTYPE_SUCCESS,
  FETCH_LIST_ROOMTYPE_ERROR,
  ADD_ROOMTYPE_REQUEST,
  DELETE_ROOMTYPE_REQUEST,
  EDIT_ROOMTYPE_REQUEST,
  SEARCH_ROOMTYPE_REQUEST,
} from "redux/actionTypes/roomActionType";
import { EDIT_GUEST_SUCCESS } from "redux/actionTypes/guestActionType";

export const fetchListRoomTypeRequest = () => {
  return {
    type: FETCH_LIST_ROOMTYPE_REQUEST,
  };
};
export const fetchListRoomTypeSuccess = (data) => {
  return {
    type: FETCH_LIST_ROOMTYPE_SUCCESS,
    payload: data,
  };
};
export const fetchListRoomTypeError = () => {
  return {
    type: FETCH_LIST_ROOMTYPE_ERROR,
  };
};
export const fetchRoomTypeDetailRequest = (data) => {
  return {
    type: FETCH_ROOMTYPE_DETAIL_REQUEST,
    payload: data,
  };
};
export const fetchRoomTypeDetailSuccess = (data) => {
  return {
    type: FETCH_ROOMTYPE_DETAIL_SUCCESS,
    payload: data,
  };
};
export const fetchRoomTypeDetailError = () => {
  return {
    type: FETCH_ROOMTYPE_DETAIL_ERROR,
  };
};

export const addRoomtypeRequest = (data) => {
  return {
    type: ADD_ROOMTYPE_REQUEST,
    payload: data,
  };
};
export const deleteRoomtypeRequest = (data) => {
  return {
    type: DELETE_ROOMTYPE_REQUEST,
    payload: data,
  };
};
export const editRoomtypeRequest = (data) => {
  return {
    type: EDIT_ROOMTYPE_REQUEST,
    payload: data,
  };
};

export const searchRoomtypeRequest = (data) => {
  return {
    type: SEARCH_ROOMTYPE_REQUEST,
    payload: data,
  };
};
