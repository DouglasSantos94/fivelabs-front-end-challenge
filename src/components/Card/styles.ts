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
