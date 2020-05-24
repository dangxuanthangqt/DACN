import { FETCH_LIST_GUEST_SUCCESS, FETCH_LIST_GUEST_REQUEST, FETCH_LIST_GUEST_ERROR } from "redux/actionTypes/guestActionType"

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