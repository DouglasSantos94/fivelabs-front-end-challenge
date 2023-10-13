import { Link, useParams } from "react-router-dom";
import { VehicleDetailInfo, VehicleDetailWrapper } from "./styles";
import { VehicleDetailCard } from "../../components/Card/styles";
import { Paragraph, Title } from "../../components/Text";
import { AddToCartButton, BackButton } from "../../components/Button";
import { useVehicle } from "../../hooks/useVehicle";
import { useStore } from "../../hooks/useStore";
import { Oval } from "react-loader-spinner";

export default function VehicleDetail() {
  const { id } = useParams();
  const { vehicle, isLoading } = useVehicle(id);
  const { addToCart } = useStore();
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
      <div style={{ width: "90%", marginBottom: "40px" }}>
        <BackButton to={"/"}>Voltar</BackButton>
      </div>
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
      {!isLoading && (
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
          <AddToCartButton onClick={() => addToCart(vehicle)}>Adicionar ao carrinho</AddToCartButton>
        </VehicleDetailCard>
      )}
    </VehicleDetailWrapper>
  );
}
