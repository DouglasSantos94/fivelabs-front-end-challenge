import { RemoveFromCartButton } from "../../../components/Button";
import { SmallParagraph } from "../../../components/Text";
import { CartItemWrapper } from "./styles";

export default function CartItem() {
  return (
    <CartItemWrapper>
      <SmallParagraph>Produto: Sand Crawler</SmallParagraph>
      <SmallParagraph>Valor: 260000</SmallParagraph>
      <RemoveFromCartButton>Remover</RemoveFromCartButton>
    </CartItemWrapper>
  );
}
