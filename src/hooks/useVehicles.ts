import { useCallback, useEffect, useState } from "react";
import { getVehicles } from "../services/SwApi";
import { VehicleProps } from "../types/Vehicle";
import { useId } from "./useId";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<VehicleProps[]>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addVehicleId } = useId();

  const fetcher = useCallback(() => {
    getVehicles()
      .then(({ data: { results } }) => setVehicles(addVehicleId(results)))
      .catch((err: Error) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { vehicles, isLoading, error };
};
