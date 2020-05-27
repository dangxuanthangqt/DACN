import { DataGuests, DataGuestStandar } from "assets/fakeData/DataGuests";
import { delay, put, takeEvery ,call} from "redux-saga/effects";
import { fetchListGuestsSuccess, fetchGuestInforSuccess } from "redux/actionCreators/guestsActionCreator";
import { FETCH_LIST_GUEST_REQUEST, FETCH_GUEST_INFOR_REQUEST } from "redux/actionTypes/guestActionType";
import axiosService from "services/axios/axiosService";

export function* guestSaga (){
    yield takeEvery(FETCH_LIST_GUEST_REQUEST, watchFetchGuestList)
    yield takeEvery(FETCH_GUEST_INFOR_REQUEST, watchFetchGuestInfor)
}
function * watchFetchGuestList(action){
  //  console.log("abc")
  try{
    yield put({type:"SHOW_LOADING"});
    const res = yield call(axiosService.get,'/api/users');
    yield put(fetchListGuestsSuccess(res.data))
    //console.log(users);
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }catch(e){

  }
    
}
function * watchFetchGuestInfor(action){
    yield put({type:"SHOW_LOADING"});

    const res = yield call(axiosService.get, `/api/users/${action.payload}`)
    console.log(res.data);
    yield put(fetchGuestInforSuccess(res.data.body));
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
}