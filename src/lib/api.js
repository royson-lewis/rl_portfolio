/** @format */

import axios from "axios";

let urls = {
  development: process.env.SERVER_DEV_PORT,
  production: process.env.SERVER_PORT,
};

const api = axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "content-Type": "application/json",
  },
});

export default api;
