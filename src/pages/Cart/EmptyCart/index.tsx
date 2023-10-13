import { Title } from "../../../components/Text";
import { EmptyCartWrapper } from "./styles";

export default function EmptyCart() {
  return (
    <EmptyCartWrapper>
      <Title>O carrinho está vazio!</Title>
    </EmptyCartWrapper>
  );
}
