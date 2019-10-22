import { all } from "redux-saga/effects";

import systemSaga from "../App/sagas";
import experienceSaga from "../Experience/sagas";
import projectsSaga from "../Projects/sagas";
import adminSaga from "../Admin/sagas";
import contactSaga from "../Contact/sagas";

export default function* rootSaga() {
  yield all([
    systemSaga(),
    experienceSaga(),
    projectsSaga(),
    adminSaga(),
    contactSaga(),
  ]);
}
