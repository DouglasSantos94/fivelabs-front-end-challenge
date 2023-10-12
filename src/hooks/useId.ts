import uuid from "react-uuid";
import { IVehicle } from "../types/Vehicle";

export const useId = () => {
  const addVehicleId = (vehicles: IVehicle[]) => {
    return vehicles.map((vehicle: IVehicle) => {
      const newVehicle = { ...vehicle, id: uuid() };
      return newVehicle;
    });
  };

  return { addVehicleId };
};
