import { createSelector } from "reselect";

import { getProjects } from "../Projects/selectors";
import { getExperience } from "../Experience/selectors";

export const getAdminVisible = state => state.admin.visible;
export const getAdminAuthenticationStatus = state => state.admin.authenticated;

export const getAdminActiveTab = state => state.admin.filters.activeTab;
export const getAdminSearchQuery = state => state.admin.filters.query;

export const getFilteredAdminRows = createSelector(
  [getAdminActiveTab, getAdminSearchQuery, getProjects, getExperience],
  (activeTab, query, projects, experience) => {
    let activeTabContent;
    switch (activeTab) {
      case "Resumé": {
        activeTabContent = experience;
        break;
      }

      case "Projects": {
        activeTabContent = projects;
        break;
      }

      case "Blog": {
        activeTabContent = [];
        break;
      }

      default: {
        activeTabContent = [];
      }
    }

    if (query) {
      const adjustedQuery = query.toLowerCase();

      return activeTabContent.filter(row =>
        row.name.toLowerCase().includes(adjustedQuery)
      );
    }

    return activeTabContent;
  }
);
