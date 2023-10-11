import { RemoveFromCartButton } from "../../../components/Button";
import { Paragraph } from "../../../components/Text";
import { CartItemWrapper } from "./styles";

export default function CartItem() {
  return (
    <CartItemWrapper>
      <Paragraph>Produto: Sand Crawler</Paragraph>
      <Paragraph>Valor: 260000</Paragraph>
      <RemoveFromCartButton>Remover</RemoveFromCartButton>
    </CartItemWrapper>
  );
}
