import { SeeDetailsButton, VehicleActions, VehicleInfo, VehicleListItemWrapper } from "./styles";
import { AddToCartButton } from "../../../components/Button/styles";
import { VehicleCard } from "../../../components/Card/styles";
import { Paragraph, Title } from "../../../components/Text";
import { IVehicle } from "../../../types/Vehicle";
import { useStore } from "../../../hooks/useStore";

interface IVehicleListItemProps {
  vehicle: IVehicle;
}

export default function VehicleListItem({ vehicle }: IVehicleListItemProps) {
  const { name, model, cost_in_credits: costInCredits, url } = vehicle;
  const id = url.charAt(url.length - 2);
  const { addToCart } = useStore();

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
          <AddToCartButton onClick={() => addToCart(vehicle)}>Adicionar ao carrinho</AddToCartButton>
        </VehicleActions>
      </VehicleCard>
    </VehicleListItemWrapper>
  );
}
