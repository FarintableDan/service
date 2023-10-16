import * as types from "./constants";

export const fetchServices = () => ({
  type: types.FETCH_SERVICES,
});

export const fetchServicesSuccess = (data) => ({
  type: types.FETCH_SERVICES_SUCCESS,
  payload: data,
});

export const fetchServicesFail = (error) => ({
  type: types.FETCH_SERVICES_FAIL,
  payload: error,
});

export const clearServices = () => ({
  type: types.CLEAR_SERVICES,
});
