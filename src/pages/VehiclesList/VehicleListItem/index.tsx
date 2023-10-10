import { AddToCartButton } from "../../../components/Button/styles";
import { VehicleCard } from "../../../components/Card/styles";
import { IVehicle } from "../../../types/Vehicle";
import { SeeDetailsButton, VehicleActions, VehicleInfo, VehicleListItemWrapper } from "./styles";

interface IVehicleListItemProps {
  vehicle: IVehicle;
}

export default function VehicleListItem({
  vehicle: { name, model, cost_in_credits: costInCredits }
}: IVehicleListItemProps) {
  return (
    <VehicleListItemWrapper>
      <VehicleCard>
        <VehicleInfo>
          <p style={{ fontSize: "36px" }}>{name}</p>
          <p style={{ fontSize: "24px" }}>{model}</p>
          <p style={{ fontSize: "20px" }}>{costInCredits}</p>
        </VehicleInfo>

        <VehicleActions>
          <SeeDetailsButton>Ver detalhes</SeeDetailsButton>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </VehicleActions>
      </VehicleCard>
    </VehicleListItemWrapper>
  );
}
