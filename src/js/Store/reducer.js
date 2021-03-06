import { combineReducers } from "redux";

import navigation from "../Navigation/reducer";
import system from "../App/reducer";
import experience from "../Experience/reducer";
import projects from "../Projects/reducer";
import admin from "../Admin/reducer";
import contact from "../Contact/reducer";
import blog from "../Blog/reducer";

const rootReducer = combineReducers({
  system,
  navigation,
  experience,
  projects,
  admin,
  contact,
  blog,
});

export default rootReducer;
