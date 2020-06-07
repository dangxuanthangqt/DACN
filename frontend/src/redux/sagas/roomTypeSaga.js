import history from "helper/history";
import { toastifyError, toastifySuccess } from "helper/Toastify";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchListRoomTypeSuccess,
  fetchRoomTypeDetailSuccess,
} from "redux/actionCreators/roomTypeActionCreator";
import {
  ADD_ROOMTYPE_REQUEST,
  DELETE_ROOMTYPE_REQUEST,
  FETCH_LIST_ROOMTYPE_REQUEST,
  FETCH_ROOMTYPE_DETAIL_REQUEST,
  EDIT_ROOMTYPE_REQUEST,
  SEARCH_ROOMTYPE_REQUEST,
} from "redux/actionTypes/roomActionType";
import axiosService from "services/axios/axiosService";
import queryString from "query-string";
export function* roomTypeSaga() {
  yield takeEvery(FETCH_LIST_ROOMTYPE_REQUEST, watchFetchListRoomType);
  yield takeEvery(FETCH_ROOMTYPE_DETAIL_REQUEST, watchFetchRoomDetail);
  yield takeEvery(ADD_ROOMTYPE_REQUEST, watchAddRoomtype);
  yield takeEvery(DELETE_ROOMTYPE_REQUEST, watchDeleteRoomtype);
  yield takeEvery(EDIT_ROOMTYPE_REQUEST, watchEditRoomtype);
  yield takeEvery(SEARCH_ROOMTYPE_REQUEST, watchSearchRoomtype);
}
function* watchFetchRoomDetail(action) {
  //console.log("payload",payload);

  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(
      axiosService.get,
      `/api/room-type/${action.payload}`
    );
    //console.log(res);
    yield put(fetchRoomTypeDetailSuccess(res.data.body));
    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchFetchListRoomType() {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(axiosService.get, "/api/room-type");
    //console.log(res.data.body);
    yield put(fetchListRoomTypeSuccess(res.data.body));
    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchAddRoomtype(action) {
  yield put({ type: "SHOW_LOADING" });
  let temp = { ...action.payload };
  temp.images = temp.images.map((item) => {
    return { name: item };
  });
  temp.extras = temp.extras.map((item) => {
    return { name: item };
  });
  try {
    const res = yield call(axiosService.post, "/api/room-type", { ...temp });
    yield call(toastifySuccess, "Add roomtype successfully !");
    yield call(history.push, "/management/room-types");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "Add roomtype Error !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchDeleteRoomtype(action) {
  yield put({ type: "SHOW_LOADING" });
  // console.log(action.payload);
  try {
    const res = yield call(
      axiosService.delete,
      `/api/room-type/${action.payload}`
    );
    yield call(toastifySuccess, "Delete roomtype successfully !");
    yield call(history.push, "/management/room-types");
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500!");
    yield put({ type: "HIDE_LOADING" });
  }
}

function* watchEditRoomtype(action) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(axiosService.put, "/api/room-type", action.payload);
    yield put(fetchRoomTypeDetailSuccess(res.data.body));

    yield call(toastifySuccess, "Edit roomtype successfully !");
    yield call(history.push, `/management/room-types/${action.payload.id}`);
    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR :(( !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchSearchRoomtype(action) {
  //console.log(action.payload);
  let temp = queryString.stringify({ valueSearch: action.payload });
  // console.log(temp);
  yield put({ type: "SHOW_LOADING" });
  try {
    const res = yield call(axiosService.get, `/api/room-type/search?${temp}`);
    if (res.data.body.length > 0) {
      yield put(fetchListRoomTypeSuccess(res.data.body));
    } else {
      yield call(toastifyError, "NOT FOUND :(( ");
    }

    yield delay(500);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR ");
    yield put({ type: "HIDE_LOADING" });
  }
}
