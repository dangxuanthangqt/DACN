import { fork } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { registerSaga } from './registerSaga';
function* rootSaga(){
    yield fork(loginSaga)
    yield fork(registerSaga)
}
export default rootSaga;