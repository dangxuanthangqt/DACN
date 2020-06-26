import { takeLatest, delay, put, call } from "redux-saga/effects";
import {
  GET_ALL_ROOM_RESERVATION_REQUEST,
  GET_ALL_RESERVATION_REQUEST,
  CHANGE_STATUS_COMPLETED_REQUEST,
  CHANGE_STATUS_CANCELLED_REQUEST,
  CHANGE_STATUS_PAYMENT_REQUEST,
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
  changeStatusPaymentSuccess,
  getAllReservationRequest,
} from "redux/actionCreators/roomReservationActionCreator";
import history from "helper/history";
import { apiPayment } from "services/apis/apiPayment";

export function* roomReservationSaga() {
  yield takeLatest(
    GET_ALL_ROOM_RESERVATION_REQUEST,
    watchGetAllRoomReservation
  );
  yield takeLatest(GET_ALL_RESERVATION_REQUEST, watchGetAllReservation);
  yield takeLatest(CHANGE_STATUS_COMPLETED_REQUEST, watchChangeCompletedStatus);
  yield takeLatest(CHANGE_STATUS_CANCELLED_REQUEST, watchChangeCancelledStatus);
  yield takeLatest(CHANGE_STATUS_PAYMENT_REQUEST, watchChangeStatusPayment);
}
function* watchChangeStatusPayment({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(apiPayment, payload);
    yield put(changeStatusPaymentSuccess(res.data.body));
    yield call(toastifySuccess, "Pay successfully!");
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchChangeCancelledStatus({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(changeStatusAPI, payload.id, payload.status);
    yield call(toastifySuccess, "Reject reservation successfully!");
    yield delay(300);
    yield put(getAllRoomReservationRequest(payload.brandId));
    yield put(getAllReservationRequest(payload.brandId));
    yield call(history.push, "/management/room-reservation");

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
    yield delay(300);
    yield put(getAllRoomReservationRequest(payload.brandId));
    yield put(getAllReservationRequest(payload.brandId));
    yield call(history.push, "/management/room-reservation");
    // getAllRoomReservationRequest(values.value)
  } catch (e) {
    yield call(toastifyError, "ERROR !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchGetAllReservation({ payload }) {
  try {
    const res = yield call(getRoomReservationByBrandId, payload);
    yield delay(500);
    if(res.data.body.length ===0){
      yield call (toastifyError,"Brand ni chưa có đơn mô đặt hết á.")
    }
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

    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
