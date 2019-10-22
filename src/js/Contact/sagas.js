import { takeLatest, put, all } from "redux-saga/effects";

import * as a from "./actionTypes";
import * as sys from "../App/actionTypes";
import { backendApi } from "../Utilities/api";

function* sendMessage(action) {
  yield put({ type: sys.SET_DATA_PENDING });
  const { data } = action;
  const { ok, problem } = yield backendApi.post("/contact", data);
  if (ok) {
    // do something
  } else {
    // handle error
    console.log(problem);
  }

  yield put({ type: sys.SET_DATA_RECEIVED });
}

function* watchRequestSendMessage() {
  const action = yield takeLatest(a.REQUEST_SEND_MESSAGE, sendMessage);
}

export default function* contactSaga() {
  yield all([watchRequestSendMessage()]);
}
