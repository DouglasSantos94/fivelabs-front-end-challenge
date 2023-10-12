import Store from "../store/Store";
import { IVehicle } from "../types/Vehicle";

export const useStore = () => {
  const cart = Store.cart;
  const addToCart = (product: IVehicle) => Store.addToCart(product);
  const removeFromCart = (product: IVehicle) => Store.removeFromCart(product);

  return { cart, addToCart, removeFromCart };
};
