import { createSelector } from "reselect";

import { getActiveView } from "../Navigation/selectors";
import { getAdminActiveTab } from "../Admin/selectors";
import { getProjectActiveTab } from "../Projects/selectors";

export const getActiveMenuTab = createSelector(
  [getActiveView, getProjectActiveTab, getAdminActiveTab],
  (view, projectTab, adminTab) => {
    switch (view) {
      case "Portfolio": {
        return projectTab;
      }

      case "Admin": {
        return adminTab;
      }

      default: {
        return null;
      }
    }
  }
);
