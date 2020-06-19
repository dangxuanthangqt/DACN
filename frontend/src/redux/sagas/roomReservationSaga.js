import { takeLatest , delay, put, call} from "redux-saga/effects";
import { GET_ALL_ROOM_RESERVATION_REQUEST } from "redux/actionTypes/roomReservationActionType";
import { toastifyError } from "helper/Toastify";
import { getAllRoom_RoomReservationByBrand } from "services/apis/apiRoomReservation";
import { getAllRoomReservationSuccess } from "redux/actionCreators/roomReservationActionCreator";

export function* roomReservationSaga() {
  yield takeLatest(
    GET_ALL_ROOM_RESERVATION_REQUEST,
    watchGetAllRoomReservation
  );
}
function* watchGetAllRoomReservation({ payload }) {
  yield put({ type: "SHOW_LOADING" });
  try {
  
    const res = yield call(getAllRoom_RoomReservationByBrand,payload);
    console.log(res.data.body)
    yield put(getAllRoomReservationSuccess(res.data.body));
    
    yield delay(700);
    yield put({ type: "HIDE_LOADING" });
  } catch (e) {
    yield call(toastifyError, "ERROR 500 !");
    yield put({ type: "HIDE_LOADING" });
  }
}
