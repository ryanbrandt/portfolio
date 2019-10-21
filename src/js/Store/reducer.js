import { combineReducers } from "redux";

import navigation from "../Navigation/reducer";
import system from "../App/reducer";
import experience from "../Experience/reducer";
import projects from "../Projects/reducer";
import admin from "../Admin/reducer";

const rootReducer = combineReducers({
  system,
  navigation,
  experience,
  projects,
  admin,
});

export default rootReducer;
