import { createSelector } from "reselect";

import { getActiveView } from "../Navigation/selectors";
import { getProjectActiveTab } from "../Projects/selectors";

export const getActiveMenuTab = createSelector(
  [getActiveView, getProjectActiveTab],
  (view, projectTab) => {
    if (view === "Portfolio") {
      return projectTab;
    }
    // other stuff here
    return null;
  }
);
