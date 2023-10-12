import { useCallback, useEffect, useState } from "react";
import { IAddress } from "../types/Address";
import { getAddressFromCep } from "../services/ViaCep";

export const useCep = (cep = "") => {
  const [address, setAddress] = useState<IAddress>({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: ""
  });

  const [error, setError] = useState<Error | null>(null);

  const fetcher = useCallback(() => {
    getAddressFromCep(cep)
      .then(({ data }) => setAddress(data))
      .catch((err: Error) => setError(err));
  }, [cep]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { address, error };
};
