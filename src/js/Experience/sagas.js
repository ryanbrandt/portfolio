import { put, takeLatest, all } from "redux-saga/effects";

import * as a from "./actionTypes";
import * as sys from "../App/actionTypes";
import { backendApi } from "../Utilities/api";

function* initializeExperienceData() {
  const { data, ok, problem } = yield backendApi.get("/work");
  yield put({ type: sys.SET_DATA_PENDING });

  if (ok) {
    yield put({ type: a.INITIALIZE_EXPERIENCE_DATA_SUCCESS, data });
  } else {
    yield put({ type: a.INITIALIZE_EXPERIENCE_DATA_ERROR, error: problem });
  }

  yield put({ type: sys.SET_DATA_RECEIVED });
}

function* watchInitializeExperienceData() {
  yield takeLatest(a.INITIALIZE_EXPERIENCE_DATA, initializeExperienceData);
}

export default function* experienceSaga() {
  yield all([watchInitializeExperienceData()]);
}
