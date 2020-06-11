import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  FETCH_LIST_ROOMTYPE_REQUEST1,
  ADD_PROMO_REQUEST,
  ADD_PROMO_SUCCESS,
  FETCH_LIST_PROMOS_REQUEST,
} from "redux/actionTypes/promoActionType";
import axiosService from "services/axios/axiosService";
import {
  fetchListRoomtypeSuccess1,
  fetchListPromoSuccess,
  addPromoSuccess,
  fetchListPromoRequest,
  fetchLengthPromoSuccess,
} from "redux/actionCreators/promoActionCreator";
import { toastifyError, toastifySuccess } from "helper/Toastify";

import { addNewPromo, getAllPromo } from "services/apis/apiPromo";

export function* promoSaga() {
  yield takeLatest(FETCH_LIST_ROOMTYPE_REQUEST1, watchFetchListRoomtype);
  yield takeLatest(ADD_PROMO_REQUEST, watchAddPromo);
  yield takeLatest(FETCH_LIST_PROMOS_REQUEST, watchFetchListPromos);
}
function* watchFetchListPromos() {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(getAllPromo);

    yield put(fetchListPromoSuccess(res.data.body));
    yield put(fetchLengthPromoSuccess(res.data.length));
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Error !");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchFetchListRoomtype(action) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(axiosService.get, "/api/room-type");
    // console.log(res.data.body);
    let temp = res.data.body.map((item) => ({
      value: item.id,
      label: item.name,
    }));
    yield put(fetchListRoomtypeSuccess1(temp));
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Error !");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchAddPromo({ payload }) {
  yield put({ type: "SHOW_LOADING" });

  const data = {
    description: payload.description,
    dollarDiscount: payload.dollarDiscount,
    percentDiscount: payload.percentDiscount,
    startDate: payload.startDate,
    endDate: payload.endDate,
    promoCode: payload.promoCode,
    roomType: {
      id: payload.roomTypeId,
    },
  };

  try {
    const res = yield call(addNewPromo, data);
    yield call(toastifySuccess, "Add promotion successfully !");
    yield put(fetchListPromoRequest());
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Error !");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  }
}
