import * as types from "./constants";

export const setError = (data) => ({
  type: types.SET_ERROR,
  payload: data,
});

export const repeatRequests = (requests) => ({
  type: types.REPEAT_REQUESTS,
  payload: requests,
});

export const clearRequests = () => ({
  type: types.CLEAR_REQUESTS,
});
