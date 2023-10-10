import { Link } from "react-router-dom";
import styled from "styled-components";

export const VehicleListItemWrapper = styled.li`
  width: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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

export const SeeDetailsButton = styled(Link)`
  color: white;
  font-size: 16px;
  text-decoration: underline;
`;
