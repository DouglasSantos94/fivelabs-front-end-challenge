import { Link } from "react-router-dom";
import { CartCard } from "../../components/Card";
import { Title } from "../../components/Text";
import CartItem from "./CartItem";
import { CartWrapper } from "./styles";
import { BuyButton } from "../../components/Button";
import { ItemsWrapper } from "../../components/ItemsWrapper";
import { useStore } from "../../hooks/useStore";
import { CartItemProps, IVehicle } from "../../types/Vehicle";
import { observer } from "mobx-react-lite";

const Cart = observer(() => {
  const {
    cart: { products, amount }
  } = useStore();

  return (
    <CartWrapper>
      <Link to={"/"}>Voltar</Link>

      <CartCard>
        <ItemsWrapper>
          <Title>Carrinho</Title>
          {products &&
            products.map((cartItem: CartItemProps, i: number) => (
              <CartItem key={i} product={cartItem.product} id={cartItem.id} />
            ))}
        </ItemsWrapper>
        <BuyButton to={"/form"}>Finalizar compra</BuyButton>
      </CartCard>
    </CartWrapper>
  );
});

export default Cart;
