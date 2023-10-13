import styled from "styled-components";

export const VehiclesListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-evenly;
  }
`;
