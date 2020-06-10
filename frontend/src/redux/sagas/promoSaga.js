import { takeLatest , call ,put} from "redux-saga/effects";
import { FETCH_LIST_ROOMTYPE_REQUEST1 } from "redux/actionTypes/promoActionType";
import axiosService from "services/axios/axiosService";
import { fetchListRoomtypeSuccess1 } from "redux/actionCreators/promoActionCreator";
import { toastifyError } from "helper/Toastify";


export function * promoSaga(){
    yield takeLatest(FETCH_LIST_ROOMTYPE_REQUEST1, watchFetchListRoomtype);

}
function* watchFetchListRoomtype(action){
    try{
        const res = yield call(axiosService.get,"/api/room-type");
       // console.log(res.data.body);
        let temp = res.data.body.map(item =>   ({value : item.id, label: item.name}));
        yield put(fetchListRoomtypeSuccess1(temp))
    }catch(e){
        yield call(toastifyError, "Error !"); 
    }
}