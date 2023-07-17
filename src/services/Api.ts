import axios from "axios";

const Api = axios.create({
  baseURL: "",
  headers: {
    Accept: "application/json"
  }
});
