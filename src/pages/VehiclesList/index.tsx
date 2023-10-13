/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

import { useVehicles } from "../../hooks/useVehicles";
import { IVehicle } from "../../types/Vehicle";
import VehicleListItem from "./VehicleListItem";
import { VehiclesListWrapper } from "./styles";
import Search from "../Search";

export default function VehiclesList() {
  const { vehicles, isLoading } = useVehicles();
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
      {isLoading && (
        <Oval
          height={300}
          width={400}
          color="#5b6066"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#ccc"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {filteredList && filteredList.map((vehicle: IVehicle) => <VehicleListItem vehicle={vehicle} />)}
    </VehiclesListWrapper>
  );
}
