import { toastifyError, toastifySuccess } from "helper/Toastify";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchLengthPromoSuccess,
  fetchListPromoRequest,
  fetchListPromoSuccess,
  fetchListRoomtypeSuccess1,
  fetchListActivePromoSuccess,
} from "redux/actionCreators/promoActionCreator";
import {
  ADD_PROMO_REQUEST,
  FETCH_LIST_PROMOS_REQUEST,
  FETCH_LIST_ROOMTYPE_REQUEST1,
  DELETE_PROMO_REQUEST,
  FETCH_LIST_ACTIVE_PROMO_REQUEST,
  EDIT_PROMO_REQUEST,
} from "redux/actionTypes/promoActionType";
import {
  addNewPromo,
  getAllPromo,
  deletePromo,
  getAllPromoStillActive,
  editPromo,
} from "services/apis/apiPromo";
import axiosService from "services/axios/axiosService";

export function* promoSaga() {
  yield takeLatest(FETCH_LIST_ROOMTYPE_REQUEST1, watchFetchListRoomtype);
  yield takeLatest(ADD_PROMO_REQUEST, watchAddPromo);
  yield takeLatest(FETCH_LIST_PROMOS_REQUEST, watchFetchListPromos);
  yield takeLatest(DELETE_PROMO_REQUEST, watchDeletePromo);
  yield takeLatest(FETCH_LIST_ACTIVE_PROMO_REQUEST, watchFetchListActivePromo);
  yield takeLatest(EDIT_PROMO_REQUEST, watchEditPromo);
}
function* watchEditPromo({ payload }) {
  console.log(payload);
  yield put({ type: "SHOW_LOADING" });
  try {
    yield call(editPromo, payload);
    yield call(toastifySuccess, "Edit promotion successfully ! ");

    yield put(fetchListPromoRequest());
  } catch (e) {
    yield call(toastifyError,"ERROR !");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchFetchListActivePromo({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(getAllPromoStillActive);
    yield put(fetchListActivePromoSuccess(res.data.body));
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchDeletePromo({ payload }) {
  try {
    const res = yield call(deletePromo, payload);
    yield call(toastifySuccess, "DELETE PROMO SUCCESSFULLY !");
    yield put(fetchListPromoRequest());
  } catch (e) {
    yield call(toastifyError, "DELETE FAILURE !");
  }
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
    // yield delay(500);
    // yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Error !");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  }
}
