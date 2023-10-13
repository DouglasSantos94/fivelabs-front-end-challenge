import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out 0.3s;

  &:hover {
    background-color: #3a3f44;
  }
`;

export const SearchItemsButton = styled(Button)`
  background-color: #3a3f44;
  padding: 5px;
`;

export const AddToCartButton = styled(Button)`
  height: 50px;
  background-color: #1e1e1e;
  color: white;
  font-size: 16px;
`;

export const RemoveFromCartButton = styled(Button)`
  padding: 5px;
  background-color: #1e1e1e;
  color: white;
  font-size: 14px;
`;

export const BuyButton = styled(Link)`
  display: inline-block;
  background-color: #1e1e1e;
  color: white;
  font-size: 16px;
  text-decoration: none;
  padding: 15px;
  border-radius: 4px;
  margin-top: 50px;
`;

export const BackButton = styled(BuyButton)`
  background-color: #5b6066;
`;

export const SearchAddressButton = styled(Button)`
  background-color: #1e1e1e;
  padding: 8px;
  color: white;
`;

export const FinishButton = styled(BuyButton)``;

export const SubmitPaymentButton = styled(Button)`
  background-color: #1e1e1e;
  padding: 8px;
  color: white;
`;
