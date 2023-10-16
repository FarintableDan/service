import { all, takeLatest, put } from "redux-saga/effects";

import * as types from "./constants";
import * as actions from "./actions";

function* repeatRequests({ payload }) {
  try {
    yield all(
      payload.map((action) =>
        put({ type: action.type, payload: { ...action.data } }),
      ),
    );
    yield put(actions.clearRequests());
  } catch (e) {
    console.log(e);
  }
}

export default function* errorHandlersSaga() {
  yield takeLatest(types.REPEAT_REQUESTS, repeatRequests);
}
