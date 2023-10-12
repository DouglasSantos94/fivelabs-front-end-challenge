import { useCallback, useEffect, useState } from "react";
import { getVehicle } from "../services/SwApi";
import { IVehicle } from "../types/Vehicle";

export const useVehicle = (id = "") => {
  const [vehicle, setVehicle] = useState<IVehicle>({
    name: "",
    model: "",
    vehicle_class: "",
    manufacturer: "",
    length: "",
    cost_in_credits: "",
    crew: "",
    passengers: "",
    max_atmosphering_speed: "",
    cargo_capacity: "",
    consumables: "",
    url: ""
  });

  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = useCallback(() => {
    getVehicle(id)
      .then(({ data }) => setVehicle(data))
      .catch((err: Error) => setError(err))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { vehicle, isLoading, error };
};
