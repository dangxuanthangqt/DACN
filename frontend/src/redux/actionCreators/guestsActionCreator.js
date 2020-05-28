import { CHANGE_STATUS_REQUEST, DELETE_USER_REQUEST, EDIT_GUEST_ERROR, EDIT_GUEST_REQUEST, EDIT_GUEST_SUCCESS, FETCH_GUEST_INFOR_ERROR, FETCH_GUEST_INFOR_REQUEST, FETCH_GUEST_INFOR_SUCCESS, FETCH_LIST_GUEST_ERROR, FETCH_LIST_GUEST_REQUEST, FETCH_LIST_GUEST_SUCCESS, UP_TO_ADMIN_REQUEST, SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS } from "redux/actionTypes/guestActionType"

export const fetchListGuestsRequest = () => {
    return {
        type: FETCH_LIST_GUEST_REQUEST
    }
}
export const fetchListGuestsSuccess = (data) => {
    return {
        type: FETCH_LIST_GUEST_SUCCESS,
        payload: data
    }
}
export const fetchListGuestsError = () => {
    return {
        type: FETCH_LIST_GUEST_ERROR
    }
}


export const fetchGuestInforRequest = (data) => {
    return {
        type: FETCH_GUEST_INFOR_REQUEST,
        payload: data
    }
}
export const fetchGuestInforSuccess = (data) => {
    return {
        type: FETCH_GUEST_INFOR_SUCCESS,
        payload: data
    }
}
export const fetchGuestInforError = () => {
    return {
        type: FETCH_GUEST_INFOR_ERROR,
    }
}


export const editGuestRequest = (data) => {
    return {
        type: EDIT_GUEST_REQUEST,
        payload: data
    }
}

export const editGuestSuccess = (data) => {
    return {
        type: EDIT_GUEST_SUCCESS,
        payload: data
    }
}

export const editGuestError = () => {
    return {
        type: EDIT_GUEST_ERROR,

    }
}


export const changeStatusRequest = (data) => {
    return {
        type: CHANGE_STATUS_REQUEST,
        payload: data
    }
}
export const uptoAdminRequest =(data)=>{
    return {
        type: UP_TO_ADMIN_REQUEST,
        payload:data
    }
}
export const deleteUserRequest=(data)=>{
    return {
        type: DELETE_USER_REQUEST,
        payload: data
    }
}
export const searchUserRequest=(data)=>{
    return {
        type: SEARCH_USER_REQUEST,
        payload: data
    }
}
export const searchUerSuccess=(data)=>{
    return {
        type: SEARCH_USER_SUCCESS,
        payload:data
    }
}