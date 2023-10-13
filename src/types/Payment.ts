export type Payment = CartData | BankSlip;

type CartData = {
  cardNumber: string;
  owner: string;
  valid: string;
  code: string;
};

type BankSlip = {
  slipCode: string;
};
