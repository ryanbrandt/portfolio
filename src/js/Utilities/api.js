import { create } from "apisauce";

import { BACKEND_API_URL } from "../../local";

export const backendApi = create({
  baseURL: BACKEND_API_URL,
  headers: {
    accept: "application/json",
  },
});
