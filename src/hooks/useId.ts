import uuid from "react-uuid";
import { IVehicle } from "../types/Vehicle";

export const useId = () => {
  const addCartProductId = (vehicle: IVehicle) => {
    const newVehicle = { product: vehicle, id: uuid() };
    return newVehicle;
  };

  return { addCartProductId };
};
