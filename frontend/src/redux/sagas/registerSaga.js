import { takeLatest, call, put, delay } from 'redux-saga/effects';
import axiosService from '../../services/axios/axiosService';
import { toastifySuccess, toastifyError } from '../../helper/Toastify';
import history from '../../helper/history';
export function* registerSaga() {
    yield takeLatest("REGISTER_REQUEST", watchRegister)
}
function* watchRegister({ payload }) {
    try {
        yield put({ type: "SHOW_LOADING" })
        //console.log(payload)
        yield call(axiosService.post, '/api/auth/register', payload);
        yield call(toastifySuccess, 'Register successfully!');
        yield call(history.push, "/auth/login")
        yield delay(500);
        yield put({ type: 'HIDE_LOADING' })
    } catch (e) {
        // console.log(e.response);
        yield put({ type: 'HIDE_LOADING' })
        yield call(toastifyError, e.response.data.debugMessage ? e.response.data.debugMessage :"Register EROR");
    }


}