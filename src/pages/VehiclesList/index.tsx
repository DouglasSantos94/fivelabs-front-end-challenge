/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useVehicles } from "../../hooks/useVehicles";
import { IVehicle } from "../../types/Vehicle";
import VehicleListItem from "./VehicleListItem";
import { VehiclesListWrapper } from "./styles";
import Search from "../Search";

export default function VehiclesList() {
  const { vehicles } = useVehicles();
  const [filteredList, setFilteredList] = useState<IVehicle[]>();

  const filterByNameOrModel = (event: Event) => {
    const value: EventTarget = event.target ? event.target.value : "";
    let updatedVehiclesList = [...vehicles];

    updatedVehiclesList = updatedVehiclesList?.filter(vehicle => {
      return vehicle.name.toLowerCase().includes(value) || vehicle.model.toLowerCase().includes(value);
    });

    setFilteredList(updatedVehiclesList);
  };

  useEffect(() => {
    setFilteredList(vehicles);
  }, [vehicles]);

  return (
    <VehiclesListWrapper>
      <Search filter={filterByNameOrModel} />

      {filteredList && filteredList.map((vehicle: IVehicle) => <VehicleListItem vehicle={vehicle} />)}
    </VehiclesListWrapper>
  );
}
