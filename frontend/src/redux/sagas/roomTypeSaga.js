import { DataRoomType } from "assets/fakeData/DataRoomType";
import { delay, put, takeEvery } from "redux-saga/effects";
import { fetchListRoomTypeSuccess, fetchRoomTypeDetailSuccess } from "redux/actionCreators/roomTypeActionCreator";
import { FETCH_LIST_ROOMTYPE_REQUEST, FETCH_ROOMTYPE_DETAIL_REQUEST } from "redux/actionTypes/roomActionType";

export function* roomTypeSaga() {
    yield takeEvery(FETCH_LIST_ROOMTYPE_REQUEST, watchFetchListRoomType);
    yield takeEvery(FETCH_ROOMTYPE_DETAIL_REQUEST, watchFetchRoomDetail);
}
function* watchFetchRoomDetail({ payload }) {
    //console.log("payload",payload);
    yield put({ type: "SHOW_LOADING" });
    const data = DataRoomType.find(item => item.sys.id == payload)
    console.log(data);
    //fake data
    yield put(fetchRoomTypeDetailSuccess({

        ...data.fields,
        id: data.sys.id,
        images: data.fields.images.map(item => (item.fields.file.url))
    }));
    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
}
function* watchFetchListRoomType() {
    yield put({ type: "SHOW_LOADING" });
    const data = DataRoomType.map(item => {
        let id = item.sys.id
        let images = item.fields.images.map((image) => image.fields.file.url)
        const room = { ...item.fields, images, id } // Reformating the array
        return room;
    })
    yield put(fetchListRoomTypeSuccess(data));

    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
}
