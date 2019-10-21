import { put, takeLatest } from "redux-saga/effects";

import * as a from "./actionTypes";
import { backendApi } from "../Utilities/api";

function* initializeExperienceData() {
  const { data, ok, problem } = yield backendApi.get("/work");
  if (ok) {
    yield put({ type: a.INITIALIZE_EXPERIENCE_DATA_SUCCESS, data });
  } else {
    console.log("Experience initialization failed");
    yield put({ type: a.INITIALIZE_EXPERIENCE_DATA_ERROR, error: problem });
  }
}

export function* watchInitializeExperienceData() {
  yield takeLatest(a.INITIALIZE_EXPERIENCE_DATA, initializeExperienceData);
}
