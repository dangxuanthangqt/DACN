import { FETCH_LIST_GUEST_SUCCESS, FETCH_LIST_GUEST_REQUEST, FETCH_LIST_GUEST_ERROR, FETCH_GUEST_INFOR_REQUEST, FETCH_GUEST_INFOR_SUCCESS, FETCH_GUEST_INFOR_ERROR } from "redux/actionTypes/guestActionType"

export const fetchListGuestsRequest =()=>{
    return {
        type: FETCH_LIST_GUEST_REQUEST
    }
}
export const fetchListGuestsSuccess =(data)=>{
    return {
        type: FETCH_LIST_GUEST_SUCCESS,
        payload:data
    }
}
export const fetchListGuestsError =()=>{
    return {
        type: FETCH_LIST_GUEST_ERROR
    }
}
export const fetchGuestInforRequest =(data)=>{
    return {
        type:  FETCH_GUEST_INFOR_REQUEST,
        payload: data
    }
}
export const fetchGuestInforSuccess =(data)=>{
    return {
        type:  FETCH_GUEST_INFOR_SUCCESS,
        payload: data
    }
}
export const fetchGuestInforError =()=>{
    return {
        type:  FETCH_GUEST_INFOR_ERROR,
    }
}