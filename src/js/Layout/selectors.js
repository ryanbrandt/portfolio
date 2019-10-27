import { createSelector } from "reselect";

import { getActiveView } from "../Navigation/selectors";
import { getAdminActiveTab } from "../Admin/selectors";
import { getBlogActiveTab } from "../Blog/selectors";
import { getProjectActiveTab } from "../Projects/selectors";

export const getActiveMenuTab = createSelector(
  [getActiveView, getProjectActiveTab, getAdminActiveTab, getBlogActiveTab],
  (view, projectTab, adminTab, blogTab) => {
    switch (view) {
      case "Portfolio": {
        return projectTab;
      }

      case "Blog": {
        return blogTab;
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
