import {
  GET_ALL_ROOM_RESERVATION_REQUEST,
  GET_ALL_ROOM_RESERVATION_SUCCESS,
  RESET_LIST_ROOM_RESERVATION_ON_REDUX,
  GET_ALL_RESERVATION_REQUEST,
  FILTER_FOLLOW_PENDDING_STATUS,
  FILTER_FOLLOW_CANCELLED_STATUS,
  FILTER_FOLLOW_COMPLETED_STATUS,
  GET_ALL_RESERVATION_SUCCESS,
  CHANGE_STATUS_COMPLETED_REQUEST,
  CHANGE_STATUS_CANCELLED_REQUEST,
  CHANGE_STATUS_PAYMENT_REQUEST,
  CHANGE_STATUS_PAYMENT_SUCCESS,
} from "redux/actionTypes/roomReservationActionType";

export const getAllRoomReservationRequest = (data) => {
  return {
    type: GET_ALL_ROOM_RESERVATION_REQUEST,
    payload: data,
  };
};
export const getAllRoomReservationSuccess = (data) => {
  return {
    type: GET_ALL_ROOM_RESERVATION_SUCCESS,
    payload: data,
  };
};
export const resetListRoomReservationOnRedux = () => {
  return {
    type: RESET_LIST_ROOM_RESERVATION_ON_REDUX,
  };
};
export const getAllReservationRequest = (data) => {
  return {
    type: GET_ALL_RESERVATION_REQUEST,
    payload: data,
  };
};
export const getAllReservationSuccess =(data)=>{
  return {
    type: GET_ALL_RESERVATION_SUCCESS,
    payload : data,
  }
}
export const filterFollowPendingStatus = () => {
  return {
    type: FILTER_FOLLOW_PENDDING_STATUS,
  };
};
export const filterFollowCompletedStatus = () => {
  return {
    type: FILTER_FOLLOW_COMPLETED_STATUS,
  };
};
export const filterFollowCancelledStatus = () => {
  return {
    type: FILTER_FOLLOW_CANCELLED_STATUS,
  };
};
export const changeStatusCompletedRequest =(data)=>{
  return {
    type:CHANGE_STATUS_COMPLETED_REQUEST,
    payload: data
  }
}
export const changeStatusCancelledRequest =(data)=>{
  return {
    type:CHANGE_STATUS_CANCELLED_REQUEST,
    payload: data
  }
}
export const changeStatusPaymentRequest =(data)=>{
  return {
    type: CHANGE_STATUS_PAYMENT_REQUEST,
    payload:data
  }
}
export const changeStatusPaymentSuccess =(data)=>{
  return {
    type: CHANGE_STATUS_PAYMENT_SUCCESS,
    payload:data
  }
}