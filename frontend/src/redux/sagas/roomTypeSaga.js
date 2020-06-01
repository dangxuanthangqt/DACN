import { DataRoomType } from "assets/fakeData/DataRoomType";
import { delay, put, takeEvery, call } from "redux-saga/effects";
import { fetchListRoomTypeSuccess, fetchRoomTypeDetailSuccess } from "redux/actionCreators/roomTypeActionCreator";
import { FETCH_LIST_ROOMTYPE_REQUEST, FETCH_ROOMTYPE_DETAIL_REQUEST, ADD_ROOMTYPE_REQUEST } from "redux/actionTypes/roomActionType";

import axiosService from "services/axios/axiosService";
import { toastifySuccess, toastifyError } from "helper/Toastify";
import history from "helper/history";

export function* roomTypeSaga() {
    yield takeEvery(FETCH_LIST_ROOMTYPE_REQUEST, watchFetchListRoomType);
    yield takeEvery(FETCH_ROOMTYPE_DETAIL_REQUEST, watchFetchRoomDetail);
    yield takeEvery(ADD_ROOMTYPE_REQUEST, watchAddRoomtype);
}
function* watchFetchRoomDetail(action) {
    //console.log("payload",payload);

    yield put({ type: "SHOW_LOADING" });
    try {
        const res = yield call(axiosService.get, `/api/room-type/${action.payload}`)
        //console.log(res);
        yield put(fetchRoomTypeDetailSuccess(res.data.body));
        yield delay(700);
        yield put({ type: "HIDE_LOADING" });
        
    } catch (e) {
        yield call(toastifyError, "ERROR 500 !")
        yield put({ type: "HIDE_LOADING" });
    }



}
function* watchFetchListRoomType() {
    yield put({ type: "SHOW_LOADING" });
    try {

        const res = yield call(axiosService.get, '/api/room-type');
        //console.log(res.data.body);
        yield put(fetchListRoomTypeSuccess(res.data.body));
        yield delay(700);
        yield put({ type: "HIDE_LOADING" });
    } catch (e) {
        yield put({ type: "HIDE_LOADING" });
    }




}
function* watchAddRoomtype(action) {
    yield put({ type: "SHOW_LOADING" })
    let temp = { ...action.payload };
    temp.images = temp.images.map(item => { return { "name": item } });
    temp.extras = temp.extras.map(item => { return { "name": item } });
    try {
        const res = yield call(axiosService.post, '/api/room-type', { ...temp })
        yield call(toastifySuccess, "Add roomtype successfully !");
        yield call(history.push, '/management/room-types');
        yield delay(500);
        yield put({ type: "HIDE_LOADING" })
    } catch (e) {
        yield call(toastifyError, "Add roomtype Error !")
        yield put({ type: "HIDE_LOADING" })
    }


}
