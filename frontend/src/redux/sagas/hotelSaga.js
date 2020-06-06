import axiosService from "services/axios/axiosService";
import { put, takeEvery, call } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "helper/Toastify";

import { FETCH_LIST_HOTEL_REQUEST } from "../actionTypes/hotelActionType";

import {
  fetchListHotelSuccess,
  fetchListHotelFailure,
} from "redux/actionCreators/hotelActionCreator";
const uri = "api/hotels";

function* watchFetchListHotel() {
  yield put({ type: "SHOW_LOADING" });

  try {
    const res = yield call(axiosService.get, `${uri}`);

    try {
      yield put(fetchListHotelSuccess(res.data.body));
    } catch (e) {
      yield put({ type: "SHOW_LOADING" });
    }
  } catch (e) {
    yield put({ type: "HIDE_LOADING" });
    yield put(fetchListHotelFailure(e));
  }
  yield put({ type: "HIDE_LOADING" });
}

export function* hotelSaga() {
  yield takeEvery(FETCH_LIST_HOTEL_REQUEST, watchFetchListHotel);
}
