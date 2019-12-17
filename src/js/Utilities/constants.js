export const menuKeyMap = {
  Portfolio: {
    items: ["All", "Full-Stack Web", "Machine Learning", "Other"],
    tagKeyMap: {
      All: "all",
      "Full-Stack Web": "web",
      "Machine Learning": "ml",
      Other: "other",
    },
  },
  Blog: {
    items: ["All", "Tech", "Other"],
    tagKeyMap: {
      All: "all",
      Technology: "tech",
      Other: "other",
    },
  },
  Contact: {
    items: [],
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
    body: "",
  },
};

export const technologies = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "Node",
  "Express",
  "Serverless",
  "Django",
  "Flask",
  "React",
  "React-Native",
  "Redux",
  "Redux Saga",
  "Reselect",
  "SQL",
  "NoSQL",
  "Cypress",
  "Jest",
  "JUnit",
];
