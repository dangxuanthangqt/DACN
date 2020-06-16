import { toastifyError, toastifySuccess } from "helper/Toastify";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchListHotelOptionSuccess,
  getAllRoomByBranchIdSuccess,
  getAllRoomByBrandIdRequest,
} from "redux/actionCreators/roomActionCreator";
import {
  ADD_ROOM_REQUEST,
  DELETE_ROOM_REQUEST,
  FETCH_LIST_HOTEL_OPTION_REQUEST,
  GET_ALL_ROOM_BY_BRANDID_REQUEST,
  EDIT_ROOM_REQUEST,
} from "redux/actionTypes/roomActionType";
import { addNewRoom, getAllRoomByBrandId, deleteRoom, editRoom } from "services/apis/apiRoom";
import axiosService from "services/axios/axiosService";

export function* roomSaga() {
  yield takeLatest(GET_ALL_ROOM_BY_BRANDID_REQUEST, watchGetAllRoomByBrandID);
  yield takeLatest(FETCH_LIST_HOTEL_OPTION_REQUEST, watchFetchListHotelOption);
  yield takeLatest(ADD_ROOM_REQUEST, watchAddRoom);
  yield takeLatest(DELETE_ROOM_REQUEST, watchDeleteRoom);
  yield takeLatest(EDIT_ROOM_REQUEST, watchEditRoom);

}
function *watchEditRoom({payload}){
  yield put({ type: "SHOW_LOADING" });
  try {
   
     const res1= yield call(editRoom, payload);
     yield call(toastifySuccess,"Edit room successfully ");
     yield put(getAllRoomByBrandIdRequest(payload.brand.id));
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
function* watchDeleteRoom({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
    const res1= yield call(deleteRoom, payload.idRoom);
    yield call(toastifySuccess,"Delete room successfully ");
    yield put(getAllRoomByBrandIdRequest(payload.idBrand));
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
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
