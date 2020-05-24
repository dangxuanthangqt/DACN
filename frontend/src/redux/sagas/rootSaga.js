import { fork } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { registerSaga } from './registerSaga';
import { logoutSaga } from './logoutSaga';
import { roomTypeSaga } from './roomTypeSaga';
import { guestSaga } from './guestSaga';
function* rootSaga(){
    yield fork(loginSaga);
    yield fork(logoutSaga);
    yield fork(registerSaga);
    yield fork(roomTypeSaga);
    yield fork(guestSaga)
}
export default rootSaga;