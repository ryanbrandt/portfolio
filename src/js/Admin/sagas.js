import { takeLatest, put, all, select, call } from "redux-saga/effects";

import * as a from "./actionTypes";
import { INITIALIZE_PROJECT_DATA } from "../Projects/actionTypes";
import { INITIALIZE_EXPERIENCE_DATA } from "../Experience/actionTypes";
import { getAdminActiveTab } from "./selectors";
import { backendApi } from "../Utilities/api";
import { tabEndpointKeyMap } from "../Utilities/constants";

/**
 * Helpers
 */
function getNextAction(activeTab) {
  switch (activeTab) {
    case "Resumè": {
      return INITIALIZE_EXPERIENCE_DATA;
    }

    case "Projects": {
      return INITIALIZE_PROJECT_DATA;
    }

    case "Blog": {
      return null;
    }

    default: {
      return null;
    }
  }
}

function getEndpoint(activeTab) {
  return tabEndpointKeyMap[activeTab];
}

function* handleResponse(ok, problem, activeTab) {
  if (ok) {
    yield put({ type: getNextAction(activeTab) });
  } else {
    console.log(`${problem} in admin update`);
  }
}

/**
 * Admin Authentication
 */
function* authenticateAdmin() {
  yield put({ type: a.SET_ADMIN_AUTHENTICATED });
}

function* watchRequestAdminAuthenticated() {
  yield takeLatest(a.REQUEST_ADMIN_AUTHENTICATION, authenticateAdmin);
}

/**
 * Update
 */
function* updateItem(action) {
  const { data } = action;
  const activeTab = yield select(getAdminActiveTab);

  const { ok, problem } = yield backendApi.put(getEndpoint(activeTab), data);
  yield call(handleResponse, ok, problem, activeTab);
}

function* watchRequestItemUpdate() {
  const action = yield takeLatest(a.REQUEST_ITEM_UPDATE, updateItem);
}

/**
 * Delete
 */
function* deleteItem(action) {
  const { id } = action;
  const activeTab = yield select(getAdminActiveTab);

  const { ok, problem } = yield backendApi.delete(getEndpoint(activeTab), {
    id,
  });
  yield call(handleResponse, ok, problem, activeTab);
}

function* watchRequestItemDelete() {
  const action = yield takeLatest(a.REQUST_ITEM_DELETION, deleteItem);
}

/**
 * Create
 */

export default function* adminSaga() {
  yield all([
    watchRequestAdminAuthenticated(),
    watchRequestItemUpdate(),
    watchRequestItemDelete(),
  ]);
}
