import axiosService from "services/axios/axiosService";
import { put, takeEvery, call } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "helper/Toastify";

import {
  FETCH_LIST_HOTEL_REQUEST,
  ADD_HOTEL_REQUEST,
  EDIT_HOTEL_REQUEST,
  DELETE_HOTEL_REQUEST,
  FETCH_PAGINATION_HOTEL_REQUEST,
  FETCH_HOTEL_DETAIL_REQUEST,
} from "../actionTypes/hotelActionType";

import {
  fetchListHotelSuccess,
  fetchListHotelFailure,
  fetchDetailHotelSuccess,
  fetchDetailHotelFailure,
  deleteHotel,
} from "redux/actionCreators/hotelActionCreator";

import { ValueRoutes } from "common/Constant";

import history from "helper/history";

const uri = "api/hotels";
const {
  Hotel: { path },
} = ValueRoutes;

function* watchCreateNewHotel(action) {
  yield put({ type: "SHOW_LOADING" });

  const { payload } = action;

  try {
    const res = yield call(axiosService.post, `${uri}`, payload);
    yield call(toastifySuccess, "Add hotel successfully !");
    yield call(history.push, `${path}`);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Add hotel Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}

function* watchEditHotel(action) {
  yield put({ type: "SHOW_LOADING" });

  const { payload } = action;

  try {
    const res = yield call(axiosService.put, `${uri}/${payload.id}`, payload);
    yield call(toastifySuccess, "Edit hotel successfully !");
    yield call(history.push, `${path}`);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Edit hotel Error !");
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
      yield put(
        fetchListHotelSuccess(res.data.body.hotelDTOs, res.data.body.count)
      );
    } catch (e) {
      yield put({ type: "SHOW_LOADING" });
    }
  } catch (e) {
    yield put({ type: "HIDE_LOADING" });
    yield put(fetchListHotelFailure(e));
  }
  yield put({ type: "HIDE_LOADING" });
}

function* watchFetchDetailHotel(action) {
  try {
    const { payload } = action;

    const url = `${uri}/${payload}`;
    const res = yield call(axiosService.get, `${url}`);
    try {
      yield put(fetchDetailHotelSuccess(res.data.body));
    } catch (e) {
      yield put({ type: "SHOW_LOADING" });
    }
  } catch (e) {
    yield put({ type: "HIDE_LOADING" });
    yield put(fetchListHotelFailure(e));
  }
  yield put({ type: "HIDE_LOADING" });
}

function* watchDeleteHotel(action) {
  yield put({ type: "SHOW_LOADING" });

  try {
    const { payload } = action;
    const res = yield call(axiosService.delete, `${uri}/${payload}`);
    yield call(toastifySuccess, "Delete Hotel Successfully !");
    yield call(history.push, `${path}`);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Delete Hotel Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}

export function* hotelSaga() {
  yield takeEvery(ADD_HOTEL_REQUEST, watchCreateNewHotel);
  yield takeEvery(DELETE_HOTEL_REQUEST, watchDeleteHotel);
  yield takeEvery(FETCH_PAGINATION_HOTEL_REQUEST, watchFetchPagination);
  yield takeEvery(FETCH_HOTEL_DETAIL_REQUEST, watchFetchDetailHotel);
  yield takeEvery(EDIT_HOTEL_REQUEST, watchEditHotel);
}
