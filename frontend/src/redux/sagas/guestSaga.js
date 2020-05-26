import { DataGuests, DataGuestStandar } from "assets/fakeData/DataGuests";
import { delay, put, takeEvery } from "redux-saga/effects";
import { fetchListGuestsSuccess, fetchGuestInforSuccess } from "redux/actionCreators/guestsActionCreator";
import { FETCH_LIST_GUEST_REQUEST, FETCH_GUEST_INFOR_REQUEST } from "redux/actionTypes/guestActionType";

export function* guestSaga (){
    yield takeEvery(FETCH_LIST_GUEST_REQUEST, watchFetchGuestList)
    yield takeEvery(FETCH_GUEST_INFOR_REQUEST, watchFetchGuestInfor)
}
function * watchFetchGuestList(action){
  //  console.log("abc")
    yield put({type:"SHOW_LOADING"});
    yield put(fetchListGuestsSuccess(DataGuestStandar))

    yield delay(700);
    yield put({type:"HIDE_LOADING"});
}
function * watchFetchGuestInfor(action){
    yield put({type:"SHOW_LOADING"});

    const data= DataGuestStandar.find(guest => action.payload == guest.id);
    console.log(data);
    yield put(fetchGuestInforSuccess(data));
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
}