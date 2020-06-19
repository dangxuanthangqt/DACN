import {
  GET_ALL_ROOM_RESERVATION_REQUEST,
  GET_ALL_ROOM_RESERVATION_SUCCESS,
  RESET_LIST_ROOM_RESERVATION_ON_REDUX,
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
export const resetListRoomReservationOnRedux=()=>{
    return {
        type: RESET_LIST_ROOM_RESERVATION_ON_REDUX
    }
}
