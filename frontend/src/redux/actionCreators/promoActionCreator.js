import {
  FETCH_LIST_ROOMTYPE_REQUEST1,
  FETCH_LIST_PROMOS_REQUEST,
  FETCH_LIST_PROMOS_SUCCESS,
  ADD_PROMO_REQUEST,
  ADD_PROMO_SUCCESS,
  FETCH_LENGTH_PROMO_SUCCESS,
  DELETE_PROMO_REQUEST,
  DELETE_PROMO_SUCCESS,
  
  FETCH_LIST_ACTIVE_PROMO_REQUEST,
  FETCH_LIST_ACTIVE_PROMO_SUCCESS,
  EDIT_PROMO_REQUEST,
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
export const deletePromoRequest=(data)=>{
  return {
    type: DELETE_PROMO_REQUEST,
    payload : data
  }
}
export const deletePromoSuccess=()=>{
  return {
     type: DELETE_PROMO_SUCCESS
  }
}
export const fetchListActivePromo=()=>{
  return {
    type: FETCH_LIST_ACTIVE_PROMO_REQUEST
  }
}
export const fetchListActivePromoSuccess=(data)=>{
  return {
    type: FETCH_LIST_ACTIVE_PROMO_SUCCESS,
    payload: data
  }
}
export const editPromoRequest =(data)=>{
  return {
    type: EDIT_PROMO_REQUEST,
    payload: data
  }
}
