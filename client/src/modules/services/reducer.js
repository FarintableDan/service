import * as types from "./constants";

const initialState = {
  data: [],
  loading: false,
};

export default function servicesReducer(
  state = initialState,
  { payload, type },
) {
  switch (type) {
    case types.FETCH_SERVICES:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SERVICES_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
      };
    }
    case types.FETCH_SERVICES_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.CLEAR_SERVICES: {
      return initialState;
    }
    default:
      return state;
  }
}
