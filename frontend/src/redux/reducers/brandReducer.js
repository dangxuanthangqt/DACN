import {
  FETCH_BRAND_DETAIL_REQUEST_FAILURE,
  FETCH_BRAND_DETAIL_REQUEST_SUCCESS,
} from "../actionTypes/brandActionType";
import produce from "immer";

import { toastifyError, toastifySuccess } from "helper/Toastify";

const initialState = {
  brand: [],
};

var myReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_BRAND_DETAIL_REQUEST_SUCCESS: {
        draft.brandDetail = action.payload.data;
        return draft;
      }
      case FETCH_BRAND_DETAIL_REQUEST_FAILURE: {
        let message = action.payload.data.debugMessage
          ? action.payload.data.debugMessage
          : action.payload.data.error;
        toastifyError(`${action.payload.status}: ${message}`);
        return draft;
      }
      default:
        return draft;
    }
  });

export default myReducer;
