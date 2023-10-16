import { call, put, takeEvery } from "redux-saga/effects";

import * as types from "./constants";
import * as actions from "./actions";
import * as errorHandlerActions from "../errorHandlers/actions";
import * as api from "./api";

function* fetchDetails({ payload, type }) {
  const { id } = payload;
  try {
    const response = yield call(api.fetchDetails, { id });
    const data = yield response.json();
    yield put(actions.fetchDetailsSuccess(data));
  } catch (error) {
    yield put(actions.fetchDetailsFail(error));
    yield put(errorHandlerActions.setError({ data: payload, type }));
  }
}

export default function* detailsSaga() {
  yield takeEvery(types.FETCH_DETAILS, fetchDetails);
}
