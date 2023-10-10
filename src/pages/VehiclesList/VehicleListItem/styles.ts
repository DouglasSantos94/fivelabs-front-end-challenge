import styled from "styled-components";

export const VehicleListItemWrapper = styled.li`
  width: 90%;
  display: flex;
  justify-content: center;
`;

export const VehicleInfo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const VehicleActions = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SeeDetailsButton = styled.a`
  color: white;
  font-size: 16px;
  text-decoration: underline;
`;
