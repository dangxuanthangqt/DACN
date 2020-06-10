import { FETCH_LIST_ROOMTYPE_REQUEST1 } from "redux/actionTypes/promoActionType";
import { FETCH_LIST_ROOMTYPE_SUCCESS1 } from "redux/actionTypes/promoActionType";

export const fetchListRoomtypeRequest1 = () => {
  return {
    type: FETCH_LIST_ROOMTYPE_REQUEST1,
  };
};
export const fetchListRoomtypeSuccess1 = (data) => {
  return {
    type: FETCH_LIST_ROOMTYPE_SUCCESS1,
    payload : data
  };
};
