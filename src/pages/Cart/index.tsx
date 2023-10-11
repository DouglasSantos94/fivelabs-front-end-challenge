import { Link } from "react-router-dom";
import { CartCard } from "../../components/Card";
import { Title } from "../../components/Text";
import CartItem from "./CartItem";
import { CartItemsWrapper, CartWrapper } from "./styles";
import { BuyButton } from "../../components/Button";

export default function Cart() {
  return (
    <CartWrapper>
      <Link to={"/"}>Voltar</Link>

      <CartCard>
        <CartItemsWrapper>
          <Title>Carrinho</Title>
          <CartItem />
          <CartItem />
        </CartItemsWrapper>
        <BuyButton to={"/form"}>Finalizar compra</BuyButton>
      </CartCard>
    </CartWrapper>
  );
}
