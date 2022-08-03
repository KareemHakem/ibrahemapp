import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "http://localhost:3006/",
  headers: {
    accept: "application/json",
    "content-type": "application/json; charset=utf-8",
  },
});
