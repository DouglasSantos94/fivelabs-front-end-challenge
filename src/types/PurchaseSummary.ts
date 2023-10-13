import { Buyer } from "./Buyer";
import { Cart } from "./Cart";

export type PurchaseSummary = {
  paymentType: string;
} & Cart &
  Buyer;
