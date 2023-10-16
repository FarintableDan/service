import { all } from "redux-saga/effects";

import serviceSaga from "./services/saga";
import detailsSaga from "./details/saga";
import errorHandlersSaga from "./errorHandlers/saga";

export default function* rootSaga() {
  yield all([serviceSaga(), detailsSaga(), errorHandlersSaga()]);
}
