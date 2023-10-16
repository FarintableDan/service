import * as types from "./constants";

export const fetchDetails = (id) => ({
  type: types.FETCH_DETAILS,
  payload: { id },
});

export const fetchDetailsSuccess = (data) => ({
  type: types.FETCH_DETAILS_SUCCESS,
  payload: data,
});

export const fetchDetailsFail = (error) => ({
  type: types.FETCH_DETAILS_FAIL,
  payload: error,
});

export const clearDetails = () => ({
  type: types.CLEAR_DETAILS,
});
