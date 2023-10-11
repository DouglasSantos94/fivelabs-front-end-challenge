import { Field } from "formik";
import styled from "styled-components";

const InputWrapper = styled.input`
  border-radius: 4px;
`;

export const SearchInputWrapper = styled(InputWrapper)`
  width: 200px;
  height: 30px;
`;

export const FormInput = styled(Field)`
  border-radius: 4px;
  border: none;
  width: 80%;
  padding: 5px;
  margin-left: 20px;
`;

export const SmallFormInput = styled(FormInput)`
  width: 40%;
`;
