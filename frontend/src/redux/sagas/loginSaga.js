import { takeEvery, call, put, delay } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actionTypes/loginActionTypes';
import { loginSuccess, loginError } from '../actionCreators/loginActionCreator';
import axiosService from '../../services/axios/axiosService';
import { toastifySuccess, toastifyError } from '../../helper/Toastify';
import { setAccessToken } from '../../helper/localStorage';
import history from '../../helper/history';
import { checkRole } from 'helper/checkRole';


export function* loginSaga() {
    yield takeEvery(LOGIN_REQUEST, watchLogin);
}
function* watchLogin({ payload }) {
    try {
        yield put({ type: "SHOW_LOADING" })
        const res = yield call(axiosService.post, "/api/auth/login", payload);
    //     console.log(res);
    //    yield call(toastifySuccess, "Login successfully !");
          
    //    yield call(setAccessToken, res.data.body.token);
    //   // console.log(res.data.body.token);
    //    yield put(loginSuccess(res.data.body.token));
    //    yield call(history.push, '/test');
        if(checkRole(res.data.body.token)){
            yield call(toastifySuccess, "Login successfully !");
          
            yield call(setAccessToken, res.data.body.token);
           // console.log(res.data.body.token);
            yield put(loginSuccess(res.data.body.token));
            yield call(history.push, '/overview');
        }else {
            yield call(toastifyError,"Please login with admin role !")
        }
        
      
        yield delay(500);
        yield put({ type: "HIDE_LOADING" });

    }
    catch (e) {
        //console.log(e)
        yield call(toastifyError, e.data.debugMessage ? e.data.debugMessage : "Please check your email or password !");
        yield put({ type: "HIDE_LOADING" });
    }

}