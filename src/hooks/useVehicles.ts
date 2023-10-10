import { useCallback, useEffect, useState } from "react";
import { getVehicles } from "../services/Api";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = useCallback(() => {
    getVehicles()
      .then(({ data: { results } }) => setVehicles(results))
      .catch((err: Error) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return { vehicles, isLoading, error };
};
