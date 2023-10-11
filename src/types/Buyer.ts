import { Address } from "./Address";
import { Payment } from "./Payment";

export type Buyer = {
  name: string;
  email: string;
  phoneNumber: string;
  cpf: string;
  address: Address;
  paymentData: Payment;
};
