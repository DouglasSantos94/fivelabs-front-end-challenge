import { AddToCartButton } from "../../../components/Button/styles";
import { VehicleCard } from "../../../components/Card/styles";
import { Paragraph, Title } from "../../../components/Text";
import { IVehicle } from "../../../types/Vehicle";
import { SeeDetailsButton, VehicleActions, VehicleInfo, VehicleListItemWrapper } from "./styles";

interface IVehicleListItemProps {
  vehicle: IVehicle;
}

export default function VehicleListItem({
  vehicle: { name, model, cost_in_credits: costInCredits, url }
}: IVehicleListItemProps) {
  const id = url.charAt(url.length - 2);

  return (
    <VehicleListItemWrapper>
      <VehicleCard>
        <VehicleInfo>
          <Title>{name}</Title>
          <Paragraph>{model}</Paragraph>
          <Paragraph>{costInCredits}</Paragraph>
        </VehicleInfo>

        <VehicleActions>
          <SeeDetailsButton to={`/detail/${id}`}>Ver detalhes</SeeDetailsButton>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </VehicleActions>
      </VehicleCard>
    </VehicleListItemWrapper>
  );
}
