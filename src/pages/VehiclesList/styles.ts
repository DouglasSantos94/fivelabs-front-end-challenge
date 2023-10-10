import styled from "styled-components";

export const VehiclesListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  @media screen and (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
  }
`;
