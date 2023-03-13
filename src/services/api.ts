import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-varify.onrender.com/",
  timeout: 10000,
});
