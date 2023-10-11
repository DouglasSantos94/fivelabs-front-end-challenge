import { Formik, Form, ErrorMessage } from "formik";
import { PaymentFormCard } from "../../components/Card";
import { Paragraph, Title } from "../../components/Text";
import { PaymentFormWrapper } from "./styles";
import { formSchema } from "../../schemas/formSchema";
import { FormDividerWrapper, SmallFormDividerWrapper } from "../../components/FormDivider";
import { FormItem, MediumFormItem, SmallFormItem } from "../../components/FormItem";
import { FinishButton, SearchAddressButton } from "../../components/Button";
import { Label } from "../../components/Label";
import { FormInput, SmallFormInput } from "../../components/Input";
import { Buyer } from "../../types/Buyer";

const initialValues: Buyer = {
  name: "",
  email: "",
  phoneNumber: "",
  cpf: "",
  address: {
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: ""
  },
  paymentData: {
    cardNumber: "",
    owner: "",
    valid: "",
    code: ""
  }
};

export default function PaymentForm() {
  return (
    <PaymentFormWrapper>
      <PaymentFormCard>
        <Title>Formulário de pagamento</Title>
        <Formik initialValues={initialValues} validationSchema={formSchema} onSubmit={() => console.log("oi")}>
          <Form>
            <Paragraph>Dados pessoais</Paragraph>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="name">
                  Nome
                  <FormInput type="text" id="name" name="name" />
                </Label>
                <ErrorMessage name="name" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="cpf">
                  CPF
                  <FormInput type="text" id="cpf" name="cpf" />
                </Label>
                <ErrorMessage name="cpf" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="phoneNumber">
                  Telefone
                  <FormInput type="text" id="phoneNumber" name="phoneNumber" />
                </Label>
                <ErrorMessage name="phoneNumber" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">
                  E-mail
                  <FormInput type="email" id="email" name="email" />
                </Label>
                <ErrorMessage name="email" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <SmallFormDividerWrapper>
              <SmallFormItem>
                <Label htmlFor="zipCode">
                  CEP
                  <FormInput type="text" id="zipCode" name="zipCode" />
                </Label>
                <ErrorMessage name="zipCode" component="div" />
              </SmallFormItem>
              <SearchAddressButton>Buscar</SearchAddressButton>
            </SmallFormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="street">
                  Rua
                  <FormInput type="text" id="street" name="street" />
                </Label>
                <ErrorMessage name="street" component="div" />
              </FormItem>
              <SmallFormItem>
                <Label htmlFor="number">
                  Nº
                  <SmallFormInput type="text" id="number" name="number" />
                </Label>
                <ErrorMessage name="number" component="div" />
              </SmallFormItem>
              <MediumFormItem>
                <Label htmlFor="complement">
                  Complemento
                  <FormInput type="text" id="complement" name="complement" />
                </Label>
                <ErrorMessage name="complement" component="div" />
              </MediumFormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="neighborhood">
                  Bairro
                  <FormInput type="text" id="neighborhood" name="neighborhood" />
                </Label>
                <ErrorMessage name="neighborhood" component="div" />
              </FormItem>
              <MediumFormItem>
                <Label htmlFor="city">
                  Cidade
                  <FormInput type="text" id="city" name="city" />
                </Label>
                <ErrorMessage name="city" component="div" />
              </MediumFormItem>
              <SmallFormItem>
                <Label htmlFor="state">
                  Estado
                  <SmallFormInput type="text" id="state" name="state" />
                </Label>
                <ErrorMessage name="state" component="div" />
              </SmallFormItem>
            </FormDividerWrapper>
            <Paragraph>Dados de pagamento</Paragraph>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="cardNumber">
                  Nº do cartão
                  <FormInput type="text" id="cardNumber" name="cardNumber" />
                </Label>
                <ErrorMessage name="cardNumber" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="owner">
                  Titular
                  <FormInput type="text" id="owner" name="owner" />
                </Label>
                <ErrorMessage name="owner" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <SmallFormItem>
                <Label htmlFor="valid">
                  Validade
                  <SmallFormInput type="text" id="valid" name="valid" />
                </Label>
                <ErrorMessage name="valid" component="div" />
              </SmallFormItem>
              <SmallFormItem>
                <Label htmlFor="code">
                  CVV
                  <SmallFormInput type="text" id="code" name="code" />
                </Label>
                <ErrorMessage name="code" component="div" />
              </SmallFormItem>
            </FormDividerWrapper>
            <FinishButton to={"/summary"}>Finalizar compra</FinishButton>
          </Form>
        </Formik>
      </PaymentFormCard>
    </PaymentFormWrapper>
  );
}
