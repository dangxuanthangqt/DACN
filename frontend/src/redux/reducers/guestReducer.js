import produce from "immer"
import { FETCH_LIST_GUEST_SUCCESS, FETCH_GUEST_INFOR_REQUEST, FETCH_GUEST_INFOR_SUCCESS } from "redux/actionTypes/guestActionType";

const intitialState = {
    guestList: [],
    guestInfor:{
        birthday: new Date()
    },
    invoices:[]
}
const myReducer = (state = intitialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case FETCH_LIST_GUEST_SUCCESS:
                {
                    draft.guestList = action.payload;
                    return draft;
                }
            case FETCH_GUEST_INFOR_SUCCESS:
                {
                    draft.guestInfor = action.payload;
                    return draft;
                }

            default:
                return draft;
        }

    })

)
export default myReducer;