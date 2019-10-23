import { createSelector } from "reselect";

import { menuKeyMap } from "../Utilities/constants";

export const getProjects = state => state.projects.data;
export const getProjectErrors = state => state.projects.errors;
export const getProjectActiveTab = state => state.projects.filters.activeTab;
export const getProjectQuery = state => state.projects.filters.query;

export const getFilteredProjects = createSelector(
  [getProjectActiveTab, getProjectQuery, getProjects],
  (tab, query, projects) => {
    // translating tabs to tags.. can be done cleaner
    const { tagKeyMap } = menuKeyMap.Portfolio;
    const activeFilter = tagKeyMap[tab];

    let tabFilteredProjects = projects;
    if (activeFilter !== "all") {
      tabFilteredProjects = projects.filter(project => {
        if (project.tags) {
          return project.tags.replace(/['"]+/g, "").includes(activeFilter);
        }
        return false;
      });
    }

    if (query) {
      const adjustedQuery = query.toLowerCase();

      return tabFilteredProjects.filter(project =>
        project.name.toLowerCase().includes(adjustedQuery)
      );
    }

    return tabFilteredProjects;
  }
);
