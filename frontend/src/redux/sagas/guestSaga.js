import { toastifyError, toastifySuccess } from "helper/Toastify";
import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchGuestInforSuccess, fetchListGuestsSuccess, fetchListGuestsRequest, searchUserRequest, searchUerSuccess } from "redux/actionCreators/guestsActionCreator";
import { EDIT_GUEST_REQUEST, FETCH_GUEST_INFOR_REQUEST, FETCH_LIST_GUEST_REQUEST, CHANGE_STATUS_REQUEST, UP_TO_ADMIN_REQUEST, DELETE_USER_REQUEST, SEARCH_USER_REQUEST } from "redux/actionTypes/guestActionType";
import axiosService from "services/axios/axiosService";
import history from "helper/history";
const queryString = require('query-string');

export function* guestSaga (){
    yield takeEvery(FETCH_LIST_GUEST_REQUEST, watchFetchGuestList);
    yield takeEvery(FETCH_GUEST_INFOR_REQUEST, watchFetchGuestInfor);
    yield takeEvery(EDIT_GUEST_REQUEST, watchEditGuest);
    yield takeEvery(CHANGE_STATUS_REQUEST, watchChangeStatus);
    yield takeEvery(UP_TO_ADMIN_REQUEST, watchUptoAdmin);
    yield takeEvery(DELETE_USER_REQUEST, watchDeleteUser);
    yield takeEvery(SEARCH_USER_REQUEST, watchSearchUser);
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
    yield call(toastifyError,"Error 500!")
    yield put({type:"HIDE_LOADING"});
  }
    
}
function * watchFetchGuestInfor(action){
  try{
    yield put({type:"SHOW_LOADING"});
    const res = yield call(axiosService.get, `/api/users/${action.payload}`)
   // console.log(res.data);
    yield put(fetchGuestInforSuccess(res.data.body));
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }
  catch(e){
    yield call(toastifyError,"Error 500!");
    yield put({type:"HIDE_LOADING"});
  }
   
}
function *watchEditGuest(action){
  try{
    yield put({type:"SHOW_LOADING"});
    //console.log(action.payload)
    const res = yield call(axiosService.put,'/api/users',action.payload);
    //console.log(res);
    yield put(fetchGuestInforSuccess(res.data.body));
    yield call(toastifySuccess,"Edit successfully !")
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }
  catch(e){
    yield call(toastifyError,"Error 500!");
    yield put({type:"HIDE_LOADING"});
  }
  
}
function *watchChangeStatus(action){
  try{
    yield put({type:"SHOW_LOADING"});
   // console.log(`/api/users/${action.payload}/status`)
    const res= yield call(axiosService.patch,`/api/users/${action.payload}/status`,{a:"a"});
    //console.log(res.data);
    yield put(fetchGuestInforSuccess(res.data.body));
    yield call(toastifySuccess,"Change status successfully !")
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }catch(e){
    yield call(toastifyError,"Error 500 !");
    yield put({type:"HIDE_LOADING"});
  }
}
function * watchUptoAdmin(action){
  try{
    yield put({type:"SHOW_LOADING"});
    //console.log(`/api/users/${action.payload}/status`)
    const res= yield call(axiosService.patch,`/api/users/${action.payload}/admin`);
    //console.log(res.data);
    yield put(fetchGuestInforSuccess(res.data.body));
    yield call(toastifySuccess,"Up to admin successfully !")
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }catch(e){
    yield call(toastifyError,"Error 500 !");
    yield put({type:"HIDE_LOADING"});
}
}
function * watchDeleteUser(action){
  try{
    yield put({type:"SHOW_LOADING"});
    //console.log(`/api/users/${action.payload}/status`)
    const res1= yield call(axiosService.delete,`/api/users/${action.payload}`);
    //console.log(res.data);
    yield call(toastifySuccess,"Delete user successfully !");
    yield call(history.push,'/management/guests')
    yield put(fetchListGuestsRequest())
    //yield put(fetchGuestInforSuccess(res.data.body));
    
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }catch(e){
    yield call(toastifyError,"Error 500 !");
    yield put({type:"HIDE_LOADING"});
  }
}
function * watchSearchUser(action){
  try{
    yield put({type:"SHOW_LOADING"});
    const res = yield call(axiosService.get,`/api/users/search?${queryString.stringify({valueSearch: action.payload})}`)
    //console.log(queryString.stringify({valueSearch: action.payload}));
    if(res.data.length === 0) {
      yield call(toastifyError,"NOT FOUND :(((((( !")
    }else{
      yield put(searchUerSuccess(res.data));
    }
    
  //  console.log(res);
    yield delay(700);
    yield put({type:"HIDE_LOADING"});
  }catch(e){
    yield call(toastifyError,"Error 500 !");
    yield put({type:"HIDE_LOADING"});
  }
}