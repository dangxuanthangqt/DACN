import { takeLatest, delay, put, call } from "redux-saga/effects";
import {
  GET_ALL_ROOM_RESERVATION_REQUEST,
  GET_ALL_RESERVATION_REQUEST,
  CHANGE_STATUS_COMPLETED_REQUEST,
  CHANGE_STATUS_CANCELLED_REQUEST,
} from "redux/actionTypes/roomReservationActionType";
import { toastifyError, toastifySuccess } from "helper/Toastify";
import {
  getAllRoom_RoomReservationByBrand,
  getRoomReservationByBrandId,
  changeStatusAPI,
} from "services/apis/apiRoomReservation";
import {
  getAllRoomReservationSuccess,
  getAllReservationSuccess,
  getAllRoomReservationRequest,
} from "redux/actionCreators/roomReservationActionCreator";
import history from "helper/history";

export function* roomReservationSaga() {
  yield takeLatest(
    GET_ALL_ROOM_RESERVATION_REQUEST,
    watchGetAllRoomReservation
  );
  yield takeLatest(GET_ALL_RESERVATION_REQUEST, watchGetAllReservation);
  yield takeLatest(CHANGE_STATUS_COMPLETED_REQUEST, watchChangeCompletedStatus);
  yield takeLatest(CHANGE_STATUS_CANCELLED_REQUEST, watchChangeCancelledStatus);
}

function* watchChangeCancelledStatus({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(changeStatusAPI, payload.id, payload.status);
    yield call(toastifySuccess, "Reject reservation successfully!");
    yield call(history.push, "/management/room-reservation");
    yield put(getAllRoomReservationRequest(payload.brandId));
    // getAllRoomReservationRequest(values.value)
  } catch (e) {
    yield call(toastifyError, "ERROR !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchChangeCompletedStatus({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(changeStatusAPI, payload.id, payload.status);
    yield call(toastifySuccess, "Accept reservation successfully!");
    yield call(history.push, "/management/room-reservation");
    yield put(getAllRoomReservationRequest(payload.brandId));
    // getAllRoomReservationRequest(values.value)
  } catch (e) {
    yield call(toastifyError, "ERROR !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchGetAllReservation({ payload }) {
  try {
    const res = yield call(getRoomReservationByBrandId, payload);
    yield put(getAllReservationSuccess(res.data.body));
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
  }
}
function* watchGetAllRoomReservation({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(getAllRoom_RoomReservationByBrand, payload);
    yield put(getAllRoomReservationSuccess(res.data.body));

    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
