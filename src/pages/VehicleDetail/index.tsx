import { Link, useParams } from "react-router-dom";
import { VehicleDetailCard } from "../../components/Card/styles";
import { useVehicle } from "../../hooks/useVehicle";
import { VehicleDetailInfo, VehicleDetailWrapper } from "./styles";
import { Paragraph, Title } from "../../components/Text";
import { AddToCartButton } from "../../components/Button/styles";
import store from "../../store/Store";

export default function VehicleDetail() {
  const { id } = useParams();
  const { vehicle } = useVehicle(id);

  const {
    name,
    model,
    cost_in_credits: costInCredits,
    vehicle_class: vehicleClass,
    manufacturer,
    length,
    crew,
    passengers,
    max_atmosphering_speed: maxAtmospheringSpeed,
    cargo_capacity: cargoCapacity,
    consumables
  } = vehicle;
  return (
    <VehicleDetailWrapper>
      <Link to={"/"}>Voltar</Link>
      {vehicle && (
        <VehicleDetailCard>
          <VehicleDetailInfo>
            <Title>{name}</Title>
            <Paragraph>Modelo: {model}</Paragraph>
            <Paragraph>Valor: {costInCredits}</Paragraph>
            <Paragraph>Classe: {vehicleClass}</Paragraph>
            <Paragraph>Fabricante: {manufacturer}</Paragraph>
            <Paragraph>Tamanho: {length}</Paragraph>
            <Paragraph>{crew}</Paragraph>
            <Paragraph>Capacidade de passageiros: {passengers}</Paragraph>
            <Paragraph>Velocidade máxima: {maxAtmospheringSpeed}</Paragraph>
            <Paragraph>Capacidade de carga: {cargoCapacity}</Paragraph>
            <Paragraph>Tempo de viagem: {consumables}</Paragraph>
          </VehicleDetailInfo>
          <AddToCartButton onClick={() => store.addToCart(vehicle)}>Adicionar ao carrinho</AddToCartButton>
        </VehicleDetailCard>
      )}
    </VehicleDetailWrapper>
  );
}
