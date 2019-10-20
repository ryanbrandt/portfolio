import { put, takeLatest } from "redux-saga/effects";

import * as a from "./actionTypes";
import { INITIALIZE_PORTFOLIO_SUCCESS } from "../App/actionTypes";
import { backendApi } from "../Utilities/api";

export function* initializeProjectData() {
  const { data, ok, problem } = yield backendApi.get("/projects");
  if (ok) {
    yield put({ type: a.INITIALIZE_PROJECT_DATA_SUCCESS, data });
  } else {
    console.log(problem);
  }

  yield put({ type: INITIALIZE_PORTFOLIO_SUCCESS });
}

export function* watchInitializeProjectData() {
  yield takeLatest(a.INITIALIZE_PROJECT_DATA, initializeProjectData);
}
