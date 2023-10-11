import { SmallParagraph } from "../../../components/Text";
import { PurchaseInfoWrapper } from "./styles";

export default function PurchaseInfo() {
  return (
    <PurchaseInfoWrapper>
      <SmallParagraph>Status: Enviado</SmallParagraph>
      <SmallParagraph>Previsão de entrega: 18/10/2023</SmallParagraph>
    </PurchaseInfoWrapper>
  );
}
