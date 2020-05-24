import produce from "immer"
import { FETCH_LIST_GUEST_SUCCESS } from "redux/actionTypes/guestActionType";

const intitialState = {
    guestList: [],
}
const myReducer = (state = intitialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case FETCH_LIST_GUEST_SUCCESS:
                {
                    draft.guestList = action.payload;
                    return draft;
                }


            default:
                return draft;
        }

    })

)
export default myReducer;