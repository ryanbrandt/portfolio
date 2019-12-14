import { takeLatest, put, all, select, call, fork } from "redux-saga/effects";

import * as a from "./actionTypes";
import { SET_DATA_PENDING, SET_DATA_RECEIVED } from "../App/actionTypes";
import { INITIALIZE_PROJECT_DATA } from "../Projects/actionTypes";
import { INITIALIZE_EXPERIENCE_DATA } from "../Experience/actionTypes";
import { INITIALIZE_BLOG_DATA } from "../Blog/actionTypes";
import { getAdminActiveTab } from "./selectors";
import { backendApi } from "../Utilities/api";
import { tabEndpointKeyMap } from "../Utilities/constants";

/**
 * Helpers
 */
function getNextAction(activeTab) {
  switch (activeTab) {
    case "Projects": {
      return INITIALIZE_PROJECT_DATA;
    }

    case "Blog": {
      return INITIALIZE_BLOG_DATA;
    }

    default: {
      return INITIALIZE_EXPERIENCE_DATA;
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
    console.log(`${problem} in admin operation`);
  }
}

/**
 * Admin Authentication
 */
function* authenticateAdmin(action) {
  yield put({ type: SET_DATA_PENDING });
  const { credentials } = action;
  const { status } = yield backendApi.post("/auth", { credentials });

  if (status === 200) {
    yield put({ type: a.SET_ADMIN_AUTHENTICATED });
  } else {
    yield put({ type: a.SET_ADMIN_DENIED });
  }

  yield put({ type: SET_DATA_RECEIVED });
}

function* watchRequestAdminAuthenticated() {
  const action = yield takeLatest(
    a.REQUEST_ADMIN_AUTHENTICATION,
    authenticateAdmin
  );
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
function* createItem(action) {
  const { data } = action;
  const activeTab = yield select(getAdminActiveTab);

  const { ok, problem } = yield backendApi.post(getEndpoint(activeTab), data);
  yield call(handleResponse, ok, problem, activeTab);
}

function* watchRequestCreateItem() {
  const action = yield takeLatest(a.REQUEST_ITEM_CREATION, createItem);
}

export default function* adminSaga() {
  yield all([
    watchRequestAdminAuthenticated(),
    watchRequestItemUpdate(),
    watchRequestItemDelete(),
    watchRequestCreateItem(),
  ]);
}
