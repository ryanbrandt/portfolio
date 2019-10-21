import { takeLatest, put } from "redux-saga/effects";

import * as a from "./actionTypes";

function* requestAdminAuthentication() {
  // lol todo
  yield put({ type: a.SET_ADMIN_AUTHENTICATED });
}

export function* watchRequestAdminAuthenticated() {
  yield takeLatest(a.REQUEST_ADMIN_AUTHENTICATION, requestAdminAuthentication);
}
