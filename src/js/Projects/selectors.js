import { createSelector } from "reselect";

import { menuKeyMap } from "../Utilities/constants";

export const getProjects = state => state.projects.data;
export const getProjectActiveTab = state => state.projects.filters.activeTab;
export const getProjectQuery = state => state.projects.filters.query;

export const getFilteredProjects = createSelector(
  [getProjectActiveTab, getProjectQuery, getProjects],
  (tab, query, projects) => {
    const { tagKeyMap } = menuKeyMap.Portfolio;
    const activeFilter = tagKeyMap[tab];

    if (activeFilter === "all") return projects;

    return projects.filter(project => {
      if (project.tags) {
        return project.tags
          .replace(/['"]+/g, "")
          .split(",")
          .includes(activeFilter);
      }
      return false;
    });
  }
);
