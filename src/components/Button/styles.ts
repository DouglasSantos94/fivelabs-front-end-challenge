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
  width: 100px;
  height: 40px;
  background-color: #1e1e1e;
  color: white;
  font-size: 14px;
`;
