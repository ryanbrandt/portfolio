import { put, takeLatest, all } from "redux-saga/effects";

import * as a from "./actionTypes";
import * as sys from "../App/actionTypes";
import { backendApi } from "../Utilities/api";

function* initializeProjectData() {
  const { data, ok, problem } = yield backendApi.get("/projects");
  yield put({ type: sys.SET_DATA_PENDING });

  if (ok) {
    yield put({ type: a.INITIALIZE_PROJECT_DATA_SUCCESS, data });
  } else {
    console.log("Project initialization failed");
    yield put({ type: a.INITIALIZE_PROJECT_DATA_ERROR, error: problem });
  }

  yield put({ type: sys.SET_DATA_RECEIVED });
}

function* watchInitializeProjectData() {
  yield takeLatest(a.INITIALIZE_PROJECT_DATA, initializeProjectData);
}

export default function* projectsSaga() {
  yield all([watchInitializeProjectData()]);
}
