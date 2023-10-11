import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  border: none;
`;

export const SearchButton = styled(Button)`
  background-color: "#3A3F44";
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

export const FinishButton = styled(BuyButton)``;
