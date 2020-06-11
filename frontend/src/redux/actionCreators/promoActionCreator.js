import {
  FETCH_LIST_ROOMTYPE_REQUEST1,
  FETCH_LIST_PROMOS_REQUEST,
  FETCH_LIST_PROMOS_SUCCESS,
  ADD_PROMO_REQUEST,
  ADD_PROMO_SUCCESS,
  FETCH_LENGTH_PROMO_SUCCESS,
} from "redux/actionTypes/promoActionType";
import { FETCH_LIST_ROOMTYPE_SUCCESS1 } from "redux/actionTypes/promoActionType";

export const fetchListRoomtypeRequest1 = () => {
  return {
    type: FETCH_LIST_ROOMTYPE_REQUEST1,
  };
};
export const fetchListRoomtypeSuccess1 = (data) => {
  return {
    type: FETCH_LIST_ROOMTYPE_SUCCESS1,
    payload: data,
  };
};
export const addPromoRequest = (data) => {
  return {
    type: ADD_PROMO_REQUEST,
    payload: data,
  };
};
export const addPromoSuccess = (data) => {
  return {
    type: ADD_PROMO_SUCCESS,
    payload: data,
  };
};
export const fetchListPromoRequest = () => {
  return {
    type: FETCH_LIST_PROMOS_REQUEST,
  };
};
export const fetchListPromoSuccess = (data) => {
  return {
    type: FETCH_LIST_PROMOS_SUCCESS,
    payload: data,
  };
};
export const fetchLengthPromoSuccess=(data)=>{
  return {
    type: FETCH_LENGTH_PROMO_SUCCESS,
    payload: data
  }
}
