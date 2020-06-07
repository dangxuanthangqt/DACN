import { fork } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { registerSaga } from "./registerSaga";
import { logoutSaga } from "./logoutSaga";
import { roomTypeSaga } from "./roomTypeSaga";
import { guestSaga } from "./guestSaga";
import { hotelSaga } from "./hotelSaga";
function* rootSaga() {
  yield fork(loginSaga);
  yield fork(logoutSaga);
  yield fork(registerSaga);
  yield fork(roomTypeSaga);
  yield fork(guestSaga);
  yield fork(hotelSaga);
}
export default rootSaga;
