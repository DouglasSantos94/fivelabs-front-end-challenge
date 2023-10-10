import { useVehicles } from "../../hooks/useVehicles";
import { IVehicle } from "../../types/Vehicle";
import VehicleListItem from "./VehicleListItem";
import { VehiclesListWrapper } from "./styles";

export default function VehiclesList() {
  const { vehicles } = useVehicles();
  console.log(vehicles);
  return (
    <VehiclesListWrapper>
      {vehicles && vehicles.map((vehicle: IVehicle) => <VehicleListItem vehicle={vehicle} />)}
    </VehiclesListWrapper>
  );
}
