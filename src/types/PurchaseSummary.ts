import { Buyer } from "./Buyer";
import { Cart } from "./Cart";

export type PurchaseSummary = {
  cart: Cart;
  paymentType: string;
} & Buyer;
