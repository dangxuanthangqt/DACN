import {
  ADD_BRAND_REQUEST,
  EDIT_BRAND_REQUEST,
  DELETE_BRAND_REQUEST,
  FETCH_BRAND_DETAIL_REQUEST,
  FETCH_BRAND_DETAIL_REQUEST_FAILURE,
  FETCH_BRAND_DETAIL_REQUEST_SUCCESS,
} from "../actionTypes/brandActionType";

export const addNewBrand = (data) => {
  return {
    type: ADD_BRAND_REQUEST,
    payload: data,
  };
};

export const deleteBrand = (data) => {
  return {
    type: DELETE_BRAND_REQUEST,
    payload: data,
  };
};

export const editBrand = (data) => {
  return {
    type: EDIT_BRAND_REQUEST,
    payload: data,
  };
};

export const fetchDetailBrandRequest = (id) => {
  return {
    type: FETCH_BRAND_DETAIL_REQUEST,
    payload: id,
  };
};

export const fetchDetailBrandSuccess = (data) => {
  return {
    type: FETCH_BRAND_DETAIL_REQUEST_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchDetailBrandFailure = (error) => {
  return {
    type: FETCH_BRAND_DETAIL_REQUEST_FAILURE,
    payload: error,
  };
};
