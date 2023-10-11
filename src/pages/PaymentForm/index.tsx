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

const initialValues = {
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
                <Label htmlFor="name">Nome:</Label>
                <FormInput type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="cpf">CPF:</Label>
                <FormInput type="text" id="cpf" name="cpf" />
                <ErrorMessage name="cpf" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="phoneNumber">Telefone:</Label>
                <FormInput type="text" id="phoneNumber" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">E-mail:</Label>
                <FormInput type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <SmallFormDividerWrapper>
              <SmallFormItem>
                <Label htmlFor="zipCode">CEP</Label>
                <FormInput type="text" id="zipCode" name="zipCode" />
                <ErrorMessage name="zipCode" component="div" />
              </SmallFormItem>
              <SearchAddressButton>Buscar</SearchAddressButton>
            </SmallFormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="street">Rua</Label>
                <FormInput type="text" id="street" name="street" />
                <ErrorMessage name="street" component="div" />
              </FormItem>
              <SmallFormItem>
                <Label htmlFor="number">Nº</Label>
                <SmallFormInput type="text" id="number" name="number" />
                <ErrorMessage name="number" component="div" />
              </SmallFormItem>
              <MediumFormItem>
                <Label htmlFor="complement">Compl.</Label>
                <FormInput type="text" id="complement" name="complement" />
                <ErrorMessage name="complement" component="div" />
              </MediumFormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="neighborhood">Bairro</Label>
                <FormInput type="text" id="neighborhood" name="neighborhood" />
                <ErrorMessage name="neighborhood" component="div" />
              </FormItem>
              <MediumFormItem>
                <Label htmlFor="city">Cidade</Label>
                <FormInput type="text" id="city" name="city" />
                <ErrorMessage name="city" component="div" />
              </MediumFormItem>
              <SmallFormItem>
                <Label htmlFor="state">Estado</Label>
                <SmallFormInput type="text" id="state" name="state" />
                <ErrorMessage name="state" component="div" />
              </SmallFormItem>
            </FormDividerWrapper>
            <Paragraph>Dados de pagamento</Paragraph>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="cardNumber">Nº do cartão</Label>
                <FormInput type="text" id="cardNumber" name="cardNumber" />
                <ErrorMessage name="cardNumber" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="owner">Titular</Label>
                <FormInput type="text" id="owner" name="owner" />
                <ErrorMessage name="owner" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <SmallFormItem>
                <Label htmlFor="valid">Validade</Label>
                <SmallFormInput type="text" id="valid" name="valid" />
                <ErrorMessage name="valid" component="div" />
              </SmallFormItem>
              <SmallFormItem>
                <Label htmlFor="code">CVV</Label>
                <SmallFormInput type="text" id="code" name="code" />
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
