import { FETCH_ROOMTYPE_DETAIL_REQUEST, FETCH_ROOMTYPE_DETAIL_SUCCESS, FETCH_ROOMTYPE_DETAIL_ERROR, FETCH_LIST_ROOMTYPE_REQUEST, FETCH_LIST_ROOMTYPE_SUCCESS, FETCH_LIST_ROOMTYPE_ERROR } from "redux/actionTypes/roomActionType"

export const fetchListRoomTypeRequest =()=>{
    return{
        type: FETCH_LIST_ROOMTYPE_REQUEST
    }
}
export const fetchListRoomTypeSuccess =(data)=>{
    return{
        type: FETCH_LIST_ROOMTYPE_SUCCESS,
        payload: data
    }
}
export const fetchListRoomTypeError =()=>{
    return{
        type: FETCH_LIST_ROOMTYPE_ERROR,
      
    }
}
export const fetchRoomTypeDetailRequest=(data)=>{
    return {
        type: FETCH_ROOMTYPE_DETAIL_REQUEST,
        payload:data
    }
}
export const fetchRoomTypeDetailSuccess=(data)=>{
    return {
        type: FETCH_ROOMTYPE_DETAIL_SUCCESS,
        payload:data
    }
}
export const fetchRoomTypeDetailError=()=>{
    return {
        type: FETCH_ROOMTYPE_DETAIL_ERROR
    }
}