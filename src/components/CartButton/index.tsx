import { CartButtonWrapper, CartButtonImage } from "./styles";

export default function CartButton() {
  return (
    <CartButtonWrapper to={"/cart"}>
      <CartButtonImage src="src/assets/img/cart.png" />
    </CartButtonWrapper>
  );
}
