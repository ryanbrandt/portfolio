import { put, takeLatest, all } from "redux-saga/effects";

import * as a from "./actionTypes";
import * as sys from "../App/actionTypes";
import { backendApi } from "../Utilities/api";

function* initializeExperienceData(action) {
  const { data, ok, problem } = yield backendApi.get("/work");
  const { isInit } = action;

  if (!isInit) {
    yield put({ type: sys.SET_DATA_PENDING });
  }

  if (ok) {
    yield put({ type: a.INITIALIZE_EXPERIENCE_DATA_SUCCESS, data });
  } else {
    yield put({ type: a.INITIALIZE_EXPERIENCE_DATA_ERROR, error: problem });
  }

  if (!isInit) {
    yield put({ type: sys.SET_DATA_RECEIVED });
  }
}

function* watchInitializeExperienceData() {
  yield takeLatest(a.INITIALIZE_EXPERIENCE_DATA, initializeExperienceData);
}

export default function* experienceSaga() {
  yield all([watchInitializeExperienceData()]);
}
