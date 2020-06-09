import axiosService from "services/axios/axiosService";
import { put, takeEvery, call } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "helper/Toastify";

import {
  FETCH_LIST_HOTEL_REQUEST,
  ADD_HOTEL_REQUEST,
  FETCH_PAGINATION_HOTEL_REQUEST,
} from "../actionTypes/hotelActionType";

import {
  fetchListHotelSuccess,
  fetchListHotelFailure,
} from "redux/actionCreators/hotelActionCreator";

import history from "helper/history";

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

function* watchCreateNewHotel(action) {
  yield put({ type: "SHOW_LOADING" });

  const { payload } = action;

  try {
    const res = yield call(axiosService.post, `${uri}`, payload);
    yield call(toastifySuccess, "Add hotel successfully !");
    yield call(history.push, "/management/hotel");
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Add hotel Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}

function* watchFetchPagination(action) {
  yield put({ type: "SHOW_LOADING" });

  try {
    const {
      payload: { size, index, valueSearch, keySort },
    } = action;

    const url = `${uri}/search?size=${size}&index=${index}&valueSearch=${valueSearch}&keySort=${keySort}`;
    const res = yield call(axiosService.get, `${url}`);

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
  yield takeEvery(ADD_HOTEL_REQUEST, watchCreateNewHotel);
  yield takeEvery(FETCH_PAGINATION_HOTEL_REQUEST, watchFetchPagination);
}
