import { fork } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { registerSaga } from "./registerSaga";
import { logoutSaga } from "./logoutSaga";
import { roomTypeSaga } from "./roomTypeSaga";
import { guestSaga } from "./guestSaga";
import { hotelSaga } from "./hotelSaga";
import {promoSaga} from "./promoSaga";
import { roomSaga } from "./roomSaga";
function* rootSaga() {
  yield fork(loginSaga);
  yield fork(logoutSaga);
  yield fork(registerSaga);
  yield fork(roomTypeSaga);
  yield fork(guestSaga);
  yield fork(hotelSaga);
  yield fork(promoSaga);
  yield fork(roomSaga);
}
export default rootSaga;
