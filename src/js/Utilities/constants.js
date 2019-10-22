export const menuKeyMap = {
  Portfolio: {
    items: ["All", "Web Applications", "Machine Learning", "Other"],
    tagKeyMap: {
      All: "all",
      "Web Applications": "web",
      "Machine Learning": "ml",
      Other: "other",
    },
  },
  Blog: {
    items: ["All", "Technology", "Social Issues", "Culture"],
    tagKeyMap: {
      All: "all",
      Technology: "tech",
      "Social Issues": "si",
      Culture: "cult",
    },
  },
  Home: {
    items: [],
  },
  Resumé: {
    items: [],
  },
  Admin: {
    items: ["Resumé", "Projects", "Blog"],
  },
};

export const tabEndpointKeyMap = {
  Projects: "projects",
  Blog: "blogs",
  Resumé: "work",
};

export const createNewContentMap = {
  Projects: {
    objective: "",
    implementation: "",
    technology: "",
  },
  Resumé: {
    description: "",
    achievments: "",
  },
  Blog: {
    title: "",
    content: "",
  },
};
