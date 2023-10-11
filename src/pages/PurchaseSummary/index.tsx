import { FinishButton } from "../../components/Button";
import { SummaryCard } from "../../components/Card";
import { ItemsWrapper } from "../../components/ItemsWrapper";
import { Title } from "../../components/Text";
import PurchaseInfo from "./PurchaseInfo";
import PurchaseItem from "./PurchaseItem";
import { PurchaseSummaryWrapper } from "./styles";

export default function PurchaseSummary() {
  return (
    <PurchaseSummaryWrapper>
      <SummaryCard>
        <Title>Resumo da compra</Title>
        <ItemsWrapper>
          <PurchaseItem />
          <PurchaseItem />
        </ItemsWrapper>
        <PurchaseInfo />
        <FinishButton to={"/"}>Voltar ao início</FinishButton>
      </SummaryCard>
    </PurchaseSummaryWrapper>
  );
}
