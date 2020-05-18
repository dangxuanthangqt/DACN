import { takeEvery, call, put } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actionTypes/loginActionTypes';
import { loginSuccess, loginError } from '../actionCreators/loginActionCreator';
import axiosService from '../../services/axios/axiosService';
import { toastifySuccess, toastifyError } from '../../helper/Toastify';
import { setAccessToken } from '../../helper/localStorage';
import history from '../../helper/history';


export function * loginSaga (){
    yield takeEvery(LOGIN_REQUEST, watchLogin);
}
function* watchLogin({payload}){
    try{
        const res = yield call(axiosService.post,"/auth/login",payload);
        yield call(toastifySuccess,"Login successfully !");
        yield put(loginSuccess(payload));
       // console.log(res);
        yield call(setAccessToken,res.data.accessToken)
        yield call(history.push,'/test')

    }
    catch(e){
        yield call(toastifyError,e.response.data.message);
    }
   
}