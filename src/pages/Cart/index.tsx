import { Link } from "react-router-dom";
import { CartCard } from "../../components/Card";
import { Title } from "../../components/Text";
import CartItem from "./CartItem";
import { CartWrapper } from "./styles";
import { BuyButton } from "../../components/Button";
import { ItemsWrapper } from "../../components/ItemsWrapper";

export default function Cart() {
  return (
    <CartWrapper>
      <Link to={"/"}>Voltar</Link>

      <CartCard>
        <ItemsWrapper>
          <Title>Carrinho</Title>
          <CartItem />
          <CartItem />
        </ItemsWrapper>
        <BuyButton to={"/form"}>Finalizar compra</BuyButton>
      </CartCard>
    </CartWrapper>
  );
}
