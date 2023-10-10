import CartButton from "../../components/CartButton";
import { HeaderWrapper, Title } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Star Wars Vehicles</Title>
      <CartButton />
    </HeaderWrapper>
  );
}
