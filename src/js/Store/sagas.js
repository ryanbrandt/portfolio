import { all } from "redux-saga/effects";

import { watchInitializePortfolio } from "../App/sagas";
import { watchInitializeExperienceData } from "../Experience/sagas";
import { watchInitializeProjectData } from "../Projects/sagas";

export default function* rootSaga() {
  yield all([
    watchInitializePortfolio(),
    watchInitializeExperienceData(),
    watchInitializeProjectData(),
  ]);
}
