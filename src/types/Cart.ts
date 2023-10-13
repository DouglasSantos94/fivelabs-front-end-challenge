import { CartItemProps } from "./Vehicle";

export type Cart = {
  amount: number;
  products: CartItemProps[];
};
