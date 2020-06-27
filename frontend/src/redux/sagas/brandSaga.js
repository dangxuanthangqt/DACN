import axiosService from "services/axios/axiosService";
import { put, takeEvery, call } from "redux-saga/effects";
import { toastifyError, toastifySuccess } from "helper/Toastify";
import {
  ADD_BRAND_REQUEST,
  DELETE_BRAND_REQUEST,
  EDIT_BRAND_REQUEST,
} from "../actionTypes/brandActionType";

import { fetchDetailBrandSuccess } from "redux/actionCreators/brandActionCreator";
const uri = "api/brands";
export function* brandSaga() {
  yield takeEvery(ADD_BRAND_REQUEST, watchCreateNewBrand);
  yield takeEvery(DELETE_BRAND_REQUEST, watchDeleteBrand);
  yield takeEvery(EDIT_BRAND_REQUEST, watchEditBrand);
}

function* watchCreateNewBrand(action) {
  yield put({ type: "SHOW_LOADING" });

  const { payload } = action;

  try {
    const res = yield call(axiosService.post, `${uri}`, payload);
    yield call(toastifySuccess, "Add brand successfully !");
    yield put({ type: "HIDE_LOADING" });
    yield put(fetchDetailBrandSuccess(res.data.body));
    console.log(res.data.body);
  } catch (e) {
    yield call(toastifyError, "Add brand Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}

function* watchDeleteBrand(action) {
  yield put({ type: "SHOW_LOADING" });

  try {
    const { payload } = action;
    const res = yield call(axiosService.delete, `${uri}/${payload}`);
    yield call(toastifySuccess, "Delete Hotel Successfully !");
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Delete Hotel Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}

function* watchEditBrand(action) {
  yield put({ type: "SHOW_LOADING" });
  const { payload } = action;
  console.log("saga edit");

  try {
    const res = yield call(axiosService.put, `${uri}/${payload.id}`, payload);
    yield call(toastifySuccess, "Edit brand successfully !");
    yield put({ type: "HIDE_LOADING" });
    yield put(fetchDetailBrandSuccess(res.data.body));
  } catch (e) {
    yield call(toastifyError, "Edit brand Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}
