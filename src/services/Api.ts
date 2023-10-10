import axios, { AxiosResponse } from "axios";

const Api = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    Accept: "application/json"
  }
});

export const getVehicles = (): Promise<AxiosResponse> => {
  return Api.get("/vehicles/");
};
