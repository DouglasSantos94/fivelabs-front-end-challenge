import { Formik, Form, Field, ErrorMessage } from "formik";
import { PaymentFormCard } from "../../components/Card";
import { Paragraph, Title } from "../../components/Text";
import { PaymentFormWrapper } from "./styles";
import { formSchema } from "../../schemas/formSchema";
import { FormDividerWrapper } from "../../components/FormDivider";
import { FormItem } from "../../components/FormItem";
import { SearchButton } from "../../components/Button";
import { Label } from "../../components/Label";

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
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="cpf">CPF:</Label>
                <Field type="text" id="cpf" name="cpf" />
                <ErrorMessage name="cpf" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="phoneNumber">Telefone:</Label>
                <Field type="text" id="phoneNumber" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="email">E-mail:</Label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="zipCode">CEP</Label>
                <Field type="text" id="zipCode" name="zipCode" />
                <ErrorMessage name="zipCode" component="div" />
              </FormItem>
              <SearchButton>Buscar</SearchButton>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="street">Rua</Label>
                <Field type="text" id="street" name="street" />
                <ErrorMessage name="street" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="number">Nº</Label>
                <Field type="text" id="number" name="number" />
                <ErrorMessage name="number" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="complement">Complemento</Label>
                <Field type="text" id="complement" name="complement" />
                <ErrorMessage name="complement" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="neighborhood">Bairro</Label>
                <Field type="text" id="neighborhood" name="neighborhood" />
                <ErrorMessage name="neighborhood" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="city">Complemento</Label>
                <Field type="text" id="city" name="city" />
                <ErrorMessage name="city" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="state">Estado</Label>
                <Field type="text" id="state" name="state" />
                <ErrorMessage name="state" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <Paragraph>Dados de pagamento</Paragraph>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="cardNumber">Nº do cartão</Label>
                <Field type="text" id="cardNumber" name="cardNumber" />
                <ErrorMessage name="cardNumber" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="owner">Titular</Label>
                <Field type="text" id="owner" name="owner" />
                <ErrorMessage name="owner" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <Label htmlFor="valid">Validade</Label>
                <Field type="text" id="valid" name="valid" />
                <ErrorMessage name="valid" component="div" />
              </FormItem>
              <FormItem>
                <Label htmlFor="code">CVV</Label>
                <Field type="text" id="code" name="code" />
                <ErrorMessage name="code" component="div" />
              </FormItem>
            </FormDividerWrapper>
          </Form>
        </Formik>
      </PaymentFormCard>
    </PaymentFormWrapper>
  );
}
