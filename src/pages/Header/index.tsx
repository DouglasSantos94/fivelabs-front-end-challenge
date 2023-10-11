import CartButton from "../../components/CartButton";
import { HeaderWrapper, HeaderTitle } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderTitle>Star Wars Vehicles</HeaderTitle>
      <CartButton />
    </HeaderWrapper>
  );
}
