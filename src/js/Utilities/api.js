import { create } from "apisauce";

export const backendApi = create({
  baseURL: "https://ryan-brandt-portfolio-backend.herokuapp.com/",
  headers: {
    accept: "application/json",
  },
});
