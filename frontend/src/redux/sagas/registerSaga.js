import { takeLatest,call } from 'redux-saga/effects';
import axiosService from '../../services/axios/axiosService';
import { toastifySuccess, toastifyError } from '../../helper/Toastify';
import history from '../../helper/history';
export function* registerSaga(){
    yield takeLatest("REGISTER_REQUEST", watchRegister)
}
function* watchRegister({payload}){
    try{
        console.log(payload)
        yield call(axiosService.post,'/auth/register',payload);
        yield call(toastifySuccess,'Register successfully!');
        yield call(history.push,"/auth/login")
    }catch(e){
       // console.log(e.response);
        yield call(toastifyError,e.response.data.message);
    }
    
}