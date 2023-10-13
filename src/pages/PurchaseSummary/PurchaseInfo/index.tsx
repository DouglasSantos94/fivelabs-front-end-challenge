import { SmallParagraph } from "../../../components/Text";
import { PurchaseInfoWrapper } from "./styles";
import { addDays, format } from "date-fns";

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
  const today = new Date();
  const todayPlus = addDays(today, 7);
  const formatted = format(todayPlus, "dd/MM/yyyy");
  return (
    <PurchaseInfoWrapper>
      <SmallParagraph>Valor total: {amount}</SmallParagraph>
      <SmallParagraph>Forma de pagamento: {paymentType}</SmallParagraph>
      <SmallParagraph>Cliente: {buyerName}</SmallParagraph>
      <SmallParagraph>
        Endereço de entrega: {street}, {number}, {complement}, {neighborhood}, {city}/{state}
      </SmallParagraph>
      <SmallParagraph>Status: {paymentType === "card" ? "Aguardando envio" : "Aguardando pagamento"}</SmallParagraph>
      <SmallParagraph>
        Previsão de entrega: {paymentType === "card" ? formatted : "7 dias a partir da data de pagamento do boleto"}
      </SmallParagraph>
    </PurchaseInfoWrapper>
  );
}
