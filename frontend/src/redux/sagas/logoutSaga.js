import { takeEvery,call,put } from "redux-saga/effects";
import { clearAccesstoken } from "../../helper/localStorage";
import { toastifySuccess } from "../../helper/Toastify";
import { logoutSuccess } from '../actionCreators/logoutActionCreator';
import history from "../../helper/history";

export function * logoutSaga (){
   yield takeEvery("LOGOUT_REQUEST", watchLogout);
}
function * watchLogout(){
    yield call(clearAccesstoken);
    yield call(toastifySuccess,"Sign out successfully!");
    yield put(logoutSuccess());
    yield call(history.push,"/auth/login")
}