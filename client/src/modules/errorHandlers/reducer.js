import * as types from "./constants";
import { onlyUniqueRequests } from "../../shared/helpers";

const initialState = {
  requests: [],
};

export default function errorHandlerReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case types.SET_ERROR: {
      return {
        requests: onlyUniqueRequests(state.requests, payload),
      };
    }
    case types.CLEAR_REQUESTS: {
      return {
        requests: [],
      };
    }
    default:
      return state;
  }
}
