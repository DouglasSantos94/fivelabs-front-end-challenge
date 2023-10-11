import styled from "styled-components";

export const FormDividerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 720px) {
    flex-wrap: nowrap;
  }
`;

export const SmallFormDividerWrapper = styled(FormDividerWrapper)`
  width: 100%;
  justify-content: flex-start;
`;
