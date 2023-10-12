import { RemoveFromCartButton } from "../../../components/Button";
import { SmallParagraph } from "../../../components/Text";
import { IVehicle } from "../../../types/Vehicle";
import { CartItemWrapper } from "./styles";

interface ICartItemProps {
  product: IVehicle;
}

export default function CartItem({ product: { name, cost_in_credits: costInCredits } }: ICartItemProps) {
  return (
    <CartItemWrapper>
      <SmallParagraph>Produto: {name}</SmallParagraph>
      <SmallParagraph>Valor: {costInCredits}</SmallParagraph>
      <RemoveFromCartButton>Remover</RemoveFromCartButton>
    </CartItemWrapper>
  );
}
