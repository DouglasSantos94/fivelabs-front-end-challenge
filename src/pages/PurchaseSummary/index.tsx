import { FinishButton } from "../../components/Button";
import { SummaryCard } from "../../components/Card";
import { ItemsWrapper } from "../../components/ItemsWrapper";
import { Title } from "../../components/Text";
import Store from "../../store/Store";
import PurchaseInfo from "./PurchaseInfo";
import PurchaseItem from "./PurchaseItem";
import { PurchaseSummaryWrapper } from "./styles";

export default function PurchaseSummary() {
  const {
    purchaseSummary: {
      cart: { amount, products },
      name: buyerName,
      street,
      complement,
      number,
      neighborhood,
      city,
      state,
      paymentType
    }
  } = Store;

  return (
    <PurchaseSummaryWrapper>
      <SummaryCard>
        <Title>Resumo da compra</Title>
        <ItemsWrapper>
          {products && products.map((product, i) => <PurchaseItem key={i} product={product.product} />)}
        </ItemsWrapper>
        <PurchaseInfo
          info={{ amount, buyerName, street, complement, number, neighborhood, city, state, paymentType }}
        />
        <FinishButton to={"/"}>Voltar ao início</FinishButton>
      </SummaryCard>
    </PurchaseSummaryWrapper>
  );
}
