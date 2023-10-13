import { ItemWrapper } from "../../../components/ItemWrapper";
import { SmallParagraph } from "../../../components/Text";
import { CartItemProps } from "../../../types/Vehicle";

export default function PurchaseItem({ product: { name, cost_in_credits: costInCredits } }: CartItemProps) {
  return (
    <ItemWrapper>
      <SmallParagraph>Produto: {name}</SmallParagraph>
      <SmallParagraph>Valor: {costInCredits}</SmallParagraph>
    </ItemWrapper>
  );
}
