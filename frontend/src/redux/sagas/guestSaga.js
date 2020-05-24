import { DataGuests } from "assets/fakeData/DataGuests";
import { delay, put, takeEvery } from "redux-saga/effects";
import { fetchListGuestsSuccess } from "redux/actionCreators/guestsActionCreator";
import { FETCH_LIST_GUEST_REQUEST } from "redux/actionTypes/guestActionType";

export function* guestSaga (){
    yield takeEvery(FETCH_LIST_GUEST_REQUEST, watchFetchGuestList)
}
function * watchFetchGuestList(action){
    console.log("abc")
    yield put({type:"SHOW_LOADING"});
    yield put(fetchListGuestsSuccess(DataGuests))

    yield delay(700);
    yield put({type:"HIDE_LOADING"});
}