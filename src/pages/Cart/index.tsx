import { Link } from "react-router-dom";
import { CartCard } from "../../components/Card";
import { Title } from "../../components/Text";
import CartItem from "./CartItem";
import { CartWrapper } from "./styles";
import { BuyButton } from "../../components/Button";
import { ItemsWrapper } from "../../components/ItemsWrapper";
import { useStore } from "../../hooks/useStore";
import { IVehicle } from "../../types/Vehicle";

export default function Cart() {
  const {
    cart: { products, amount }
  } = useStore();

  return (
    <CartWrapper>
      <Link to={"/"}>Voltar</Link>

      <CartCard>
        <ItemsWrapper>
          <Title>Carrinho</Title>
          {products && products.map((product: IVehicle) => <CartItem product={product} />)}
        </ItemsWrapper>
        <BuyButton to={"/form"}>Finalizar compra</BuyButton>
      </CartCard>
    </CartWrapper>
  );
}
