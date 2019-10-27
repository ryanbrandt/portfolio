import { put, takeLatest, all } from "redux-saga/effects";

import * as a from "./actionTypes";
import { INITIALIZE_EXPERIENCE_DATA } from "../Experience/actionTypes";
import { INITIALIZE_PROJECT_DATA } from "../Projects/actionTypes";
import { INITIALIZE_BLOG_DATA } from "../Blog/actionTypes";

function* initializePortfolio() {
  yield put({ type: INITIALIZE_EXPERIENCE_DATA });
  yield put({ type: INITIALIZE_PROJECT_DATA });
  yield put({ type: INITIALIZE_BLOG_DATA });
}

export function* watchInitializePortfolio() {
  yield takeLatest(a.INITIALIZE_PORTFOLIO, initializePortfolio);
}

export default function* systemSaga() {
  yield all([watchInitializePortfolio()]);
}
