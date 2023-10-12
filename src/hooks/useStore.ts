import Store from "../store/Store";
import { IVehicle } from "../types/Vehicle";
import { useId } from "./useId";

export const useStore = () => {
  const { addCartProductId } = useId();
  const cart = Store.cart;
  const addToCart = (product: IVehicle) => {
    const newProduct = addCartProductId(product);
    Store.addToCart(newProduct);
  };
  const removeFromCart = (id: string) => Store.removeFromCart(id);

  return { cart, addToCart, removeFromCart };
};
