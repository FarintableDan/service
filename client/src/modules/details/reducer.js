import * as types from "./constants";

const initialState = {
  data: [],
  loading: false,
  id: null,
};

export default function detailsReducer(
  state = initialState,
  { payload, type },
) {
  switch (type) {
    case types.FETCH_DETAILS:
      return {
        ...state,
        loading: true,
        id: payload.id,
      };
    case types.FETCH_DETAILS_SUCCESS: {
      return {
        ...state,
        data: payload,
        loading: false,
      };
    }
    case types.FETCH_DETAILS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.CLEAR_DETAILS: {
      return initialState;
    }
    default:
      return state;
  }
}
