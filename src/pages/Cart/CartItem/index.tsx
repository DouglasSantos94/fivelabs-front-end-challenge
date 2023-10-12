import { RemoveFromCartButton } from "../../../components/Button";
import { SmallParagraph } from "../../../components/Text";
import { useStore } from "../../../hooks/useStore";
import { CartItemProps } from "../../../types/Vehicle";
import { CartItemWrapper } from "./styles";

export default function CartItem({ id, product: { name, cost_in_credits: costInCredits } }: CartItemProps) {
  const { removeFromCart } = useStore();
  return (
    <CartItemWrapper>
      <SmallParagraph>Produto: {name}</SmallParagraph>
      <SmallParagraph>Valor: {costInCredits}</SmallParagraph>
      <RemoveFromCartButton onClick={() => removeFromCart(id)}>Remover</RemoveFromCartButton>
    </CartItemWrapper>
  );
}
