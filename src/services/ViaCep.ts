import axios, { AxiosResponse } from "axios";

const CepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
  headers: {
    Accept: "application/json"
  }
});

export const getAddressFromCep = (cep: string): Promise<AxiosResponse> => {
  return CepApi.get(`/${cep}/json/`);
};
