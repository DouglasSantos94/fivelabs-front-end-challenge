import styled from "styled-components";

export const FormItem = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (min-width: 720px) {
    width: 50%;
  }
`;

export const MediumFormItem = styled(FormItem)`
  width: 50%;
  justify-content: center;
`;

export const SmallFormItem = styled(FormItem)`
  width: 40%;
  justify-content: center;
`;
