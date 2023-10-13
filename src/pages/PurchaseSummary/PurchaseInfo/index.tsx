import { SmallParagraph } from "../../../components/Text";
import { PurchaseInfoWrapper } from "./styles";

interface IPurchaseInfoProps {
  info: {
    amount: number;
    buyerName: string;
    street: string;
    complement: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    paymentType: string;
  };
}

export default function PurchaseInfo({
  info: { amount, buyerName, street, number, complement, neighborhood, city, state, paymentType }
}: IPurchaseInfoProps) {
  return (
    <PurchaseInfoWrapper>
      <SmallParagraph>Valor total: {amount}</SmallParagraph>
      <SmallParagraph>Cliente: {buyerName}</SmallParagraph>
      <SmallParagraph>
        Endereço de entrega: {street}, {number}, {complement}, {neighborhood}, {city}/{state}
      </SmallParagraph>
      <SmallParagraph></SmallParagraph>
      <SmallParagraph></SmallParagraph>
      <SmallParagraph>Status: {paymentType === "card" ? "Aguardando envio" : "Aguardando pagamento"}</SmallParagraph>
      <SmallParagraph>Previsão de entrega: 18/10/2023</SmallParagraph>
    </PurchaseInfoWrapper>
  );
}
