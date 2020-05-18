
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

            default:
                return draft;
        }
    })
)
export default myReducer;