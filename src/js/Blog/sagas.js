import { put, takeLatest, all } from "redux-saga/effects";

import * as a from "./actionTypes";
import * as sys from "../App/actionTypes";
import { backendApi } from "../Utilities/api";

function* initializeBlogData() {
  const { data, ok, problem } = yield backendApi.get("/blogs");
  yield put({ type: sys.SET_DATA_PENDING });

  if (ok) {
    yield put({ type: a.INITIALIZE_BLOG_DATA_SUCCESS, data });
  } else {
    console.log("Blog initialization failed");
    yield put({ type: a.INITIALIZE_BLOG_DATA_ERROR, error: problem });
  }

  yield put({ type: sys.SET_DATA_RECEIVED });
}

function* watchInitializeBlogData() {
  yield takeLatest(a.INITIALIZE_BLOG_DATA, initializeBlogData);
}

export default function* blogSaga() {
  yield all([watchInitializeBlogData()]);
}
