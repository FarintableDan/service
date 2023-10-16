import { call, put, takeLatest } from "redux-saga/effects";

import * as types from "./constants";
import * as actions from "./actions";
import * as api from "./api";
import * as errorHandlerActions from "../errorHandlers/actions";

function* fetchServices({ type }) {
  try {
    const response = yield call(api.fetchServices);
    const data = yield response.json();
    yield put(actions.fetchServicesSuccess(data));
  } catch (error) {
    yield put(actions.fetchServicesFail(error));
    yield put(errorHandlerActions.setError({ type }));
  }
}

export default function* serviceSaga() {
  yield takeLatest(types.FETCH_SERVICES, fetchServices);
}
