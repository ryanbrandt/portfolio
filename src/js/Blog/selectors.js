import { createSelector } from "reselect";

import { menuKeyMap } from "../Utilities/constants";

export const getBlogPosts = state => state.blog.data;
export const getBlogErrors = state => state.blog.errors;

export const getBlogActiveTab = state => state.blog.filters.activeTab;
export const getBlogQuery = state => state.blog.filters.query;

export const getFilteredProjects = createSelector(
  [getBlogActiveTab, getBlogQuery, getBlogPosts],
  (tab, query, posts) => {
    // translating tabs to tags.. can be done cleaner
    const { tagKeyMap } = menuKeyMap.Portfolio;
    const activeFilter = tagKeyMap[tab];

    let tabFilteredPosts = posts;
    if (activeFilter !== "all") {
      tabFilteredPosts = posts.filter(post => {
        if (post.tags) {
          return post.tags.replace(/['"]+/g, "").includes(activeFilter);
        }
        return false;
      });
    }

    if (query) {
      const adjustedQuery = query.toLowerCase();

      return tabFilteredPosts.filter(post =>
        post.name.toLowerCase().includes(adjustedQuery)
      );
    }

    return tabFilteredPosts;
  }
);
