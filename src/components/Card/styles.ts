import styled from "styled-components";

const Card = styled.div`
  background-color: #5b6066;
  border-radius: 6px;
  padding: 20px 0;
  color: white;
`;

export const VehicleCard = styled(Card)`
  height: 300px;
  width: 100%;
`;

export const VehicleDetailCard = styled(Card)`
  width: 90%;
  text-align: center;
  margin: auto;
`;

export const CartCard = styled(Card)`
  width: 350px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 500px) {
    width: 80%;
  }
`;

export const SummaryCard = styled(CartCard)``;

export const PaymentFormCard = styled(CartCard)`
  width: 400px;
  margin-bottom: 20px;
  margin-top: 50px;

  @media screen and (min-width: 500px) {
    width: 70%;
  }
`;
