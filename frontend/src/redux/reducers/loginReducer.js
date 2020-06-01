
import produce from 'immer';
import * as loginActionTypes from '../actionTypes/loginActionTypes';
import jwt_decode from 'jwt-decode';
const initialState = {};
var myReducer = (state = initialState, action) => (
    produce(state, draft => {
        switch (action.type) {
            case loginActionTypes.LOGIN_SUCCESS:
                { let token = action.payload;
                 //   console.log(jwt_decode(token))
                 draft = jwt_decode(token);
                  // draft =token;
                return draft;}
            case "LOGOUT_SUCCESS":
                draft = {};
                return draft;
            default:
                return draft;
        }
    })
)
export default myReducer;