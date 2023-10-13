import { FinishButton } from "../../components/Button";
import { SummaryCard } from "../../components/Card";
import { ItemsWrapper } from "../../components/ItemsWrapper";
import { Title } from "../../components/Text";
import { useStore } from "../../hooks/useStore";
import PurchaseInfo from "./PurchaseInfo";
import PurchaseItem from "./PurchaseItem";
import { PurchaseSummaryWrapper } from "./styles";

export default function PurchaseSummary() {
  const {
    cart: { amount, products }
  } = useStore();

  return (
    <PurchaseSummaryWrapper>
      <SummaryCard>
        <Title>Resumo da compra</Title>
        <ItemsWrapper>
          {products.map((product, i) => (
            <PurchaseItem key={i} product={product} />
          ))}
        </ItemsWrapper>
        <PurchaseInfo />
        <FinishButton to={"/"}>Voltar ao início</FinishButton>
      </SummaryCard>
    </PurchaseSummaryWrapper>
  );
}
