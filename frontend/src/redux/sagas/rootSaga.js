import { fork } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { registerSaga } from './registerSaga';
import { logoutSaga } from './logoutSaga';
function* rootSaga(){
    yield fork(loginSaga);
    yield fork(logoutSaga);
    yield fork(registerSaga);
}
export default rootSaga;