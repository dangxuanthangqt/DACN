import { takeLatest, put, delay, call } from "redux-saga/effects";

import {
  FETCH_LIST_HOTEL_OPTION_REQUEST,
  ADD_ROOM_REQUEST,
  GET_ALL_ROOM_BY_BRANDID_REQUEST,
} from "redux/actionTypes/roomActionType";
import {
  fetchListHotelOptionSuccess,
  getAllRoomByBranchIdSuccess,
  getAllRoomByBrandIdRequest,
} from "redux/actionCreators/roomActionCreator";
import axiosService from "services/axios/axiosService";
import { toastifyError, toastifySuccess } from "helper/Toastify";
import { addNewRoom, getAllRoomByBrandId } from "services/apis/apiRoom";

export function* roomSaga() {
  yield takeLatest(GET_ALL_ROOM_BY_BRANDID_REQUEST, watchGetAllRoomByBrandID);
  yield takeLatest(FETCH_LIST_HOTEL_OPTION_REQUEST, watchFetchListHotelOption);
  yield takeLatest(ADD_ROOM_REQUEST, watchAddRoom);
}
function* watchGetAllRoomByBrandID({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(getAllRoomByBrandId, payload);
    yield put(getAllRoomByBranchIdSuccess(res.data.body));

    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchAddRoom({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    //console.log(payload);
    const res = yield call(addNewRoom, payload);
   // console.log(res.data);
    yield put(getAllRoomByBrandIdRequest(payload.brand.id));
    yield call(toastifySuccess, "Add room successfully !");
    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchFetchListHotelOption({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(axiosService.get, `/api/hotels`);

    yield put(fetchListHotelOptionSuccess(res.data.body));
    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
