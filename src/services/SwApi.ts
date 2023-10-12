import axios, { AxiosResponse } from "axios";

const SwApi = axios.create({
  baseURL: "https://swapi.dev/api",
  headers: {
    Accept: "application/json"
  }
});

export const getVehicles = (): Promise<AxiosResponse> => {
  return SwApi.get("/vehicles/");
};

export const getVehicle = (id: string): Promise<AxiosResponse> => {
  return SwApi.get(`/vehicles/${id}`);
};
