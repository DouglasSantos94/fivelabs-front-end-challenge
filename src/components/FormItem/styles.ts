import styled from "styled-components";

export const FormItem = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MediumFormItem = styled(FormItem)`
  width: 50%;
`;

export const SmallFormItem = styled(FormItem)`
  width: 35%;
  justify-content: space-around;
`;
