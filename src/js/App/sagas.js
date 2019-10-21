import { put, takeLatest } from "redux-saga/effects";

import * as a from "./actionTypes";
import { INITIALIZE_EXPERIENCE_DATA } from "../Experience/actionTypes";
import { INITIALIZE_PROJECT_DATA } from "../Projects/actionTypes";

function* initializePortfolio() {
  yield put({ type: INITIALIZE_EXPERIENCE_DATA });
  yield put({ type: INITIALIZE_PROJECT_DATA });
}

export function* watchInitializePortfolio() {
  yield takeLatest(a.INITIALIZE_PORTFOLIO, initializePortfolio);
}
