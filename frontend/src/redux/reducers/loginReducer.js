
import produce from 'immer';
import * as loginActionTypes from '../actionTypes/loginActionTypes';

const initialState = {
}
var myReducer = (state = initialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case loginActionTypes.LOGIN_SUCCESS:
                draft = action.data;
                return draft;
            case "LOGOUT_SUCCESS":
                draft = {};
                return draft;
            default:
                return draft;
        }
    })
)
export default myReducer;