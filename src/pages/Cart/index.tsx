import { CartCard } from "../../components/Card";
import { Title } from "../../components/Text";
import CartItem from "./CartItem";
import { CartItemsWrapper } from "./styles";

export default function Cart() {
  return (
    <CartCard>
      <CartItemsWrapper>
        <Title>Carrinho</Title>
        <CartItem />
        <CartItem />
      </CartItemsWrapper>
    </CartCard>
  );
}
