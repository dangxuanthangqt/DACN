

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from '../actionTypes/loginActionTypes';
export const loginRequest = (data) => {
    return {
        type: LOGIN_REQUEST,
        payload:data
    }
}
export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload :data

    }
}
export const loginError = () => {
    return {
        type: LOGIN_ERROR,
    }
}
