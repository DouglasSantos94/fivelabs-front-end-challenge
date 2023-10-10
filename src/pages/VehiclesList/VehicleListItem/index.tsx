import { AddToCartButton } from "../../../components/Button/styles";
import { VehicleCard } from "../../../components/Card/styles";
import { SeeDetailsButton, VehicleActions, VehicleInfo, VehicleListItemWrapper } from "./styles";

export default function VehicleListItem() {
  return (
    <VehicleListItemWrapper>
      <VehicleCard>
        <VehicleInfo>
          <p style={{ fontSize: "36px" }}>Nome</p>
          <p style={{ fontSize: "24px" }}>Modelo</p>
          <p style={{ fontSize: "20px" }}>Valor</p>
        </VehicleInfo>

        <VehicleActions>
          <SeeDetailsButton>Ver detalhes</SeeDetailsButton>
          <AddToCartButton>Adicionar ao carrinho</AddToCartButton>
        </VehicleActions>
      </VehicleCard>
    </VehicleListItemWrapper>
  );
}
