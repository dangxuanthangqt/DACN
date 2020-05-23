import { fork } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { registerSaga } from './registerSaga';
import { logoutSaga } from './logoutSaga';
import { roomTypeSaga } from './roomTypeSaga';
function* rootSaga(){
    yield fork(loginSaga);
    yield fork(logoutSaga);
    yield fork(registerSaga);
    yield fork(roomTypeSaga)
}
export default rootSaga;