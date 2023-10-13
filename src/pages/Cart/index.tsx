import { CartCard } from "../../components/Card";
import { Paragraph, Title } from "../../components/Text";
import CartItem from "./CartItem";
import { CartWrapper } from "./styles";
import { BackButton, BuyButton } from "../../components/Button";
import { ItemsWrapper } from "../../components/ItemsWrapper";
import { useStore } from "../../hooks/useStore";
import { CartItemProps } from "../../types/Vehicle";
import { observer } from "mobx-react-lite";
import EmptyCart from "./EmptyCart";

const Cart = observer(() => {
  const {
    cart: { products, amount }
  } = useStore();

  return (
    <CartWrapper>
      <div style={{ width: "80%", marginBottom: "40px" }}>
        <BackButton to={"/"}>Voltar</BackButton>
      </div>

      <CartCard>
        {products.length === 0 && <EmptyCart />}
        {products.length > 0 && (
          <>
            <ItemsWrapper>
              <Title>Carrinho</Title>
              {products &&
                products.map((cartItem: CartItemProps, i: number) => (
                  <CartItem key={i} product={cartItem.product} id={cartItem.id} />
                ))}
            </ItemsWrapper>
            <Paragraph>Total: {amount}</Paragraph>
            <BuyButton to={"/form"}>Finalizar compra</BuyButton>
          </>
        )}
      </CartCard>
    </CartWrapper>
  );
});

export default Cart;
