import produce from 'immer';
import { FETCH_LIST_ROOMTYPE_SUCCESS1 } from 'redux/actionTypes/promoActionType';


const initialState = {
    roomtypeSelect : []
};
var myReducer = (state = initialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case FETCH_LIST_ROOMTYPE_SUCCESS1:{
                draft.roomtypeSelect = action.payload;
                return draft;
            }
            default:
                return draft;
        }
    })
)
export default myReducer;