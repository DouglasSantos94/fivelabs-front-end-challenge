import { Formik, Form, Field, ErrorMessage } from "formik";
import { PaymentFormCard } from "../../components/Card";
import { Paragraph, Title } from "../../components/Text";
import { PaymentFormWrapper } from "./styles";
import { formSchema } from "../../schemas/formSchema";
import { FormDividerWrapper } from "../../components/FormDivider";
import { FormItem } from "../../components/FormItem";
import { SearchButton } from "../../components/Button";

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
                <label htmlFor="name">Nome:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
              </FormItem>
              <FormItem>
                <label htmlFor="cpf">CPF:</label>
                <Field type="text" id="cpf" name="cpf" />
                <ErrorMessage name="cpf" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <label htmlFor="phoneNumber">Telefone:</label>
                <Field type="text" id="phoneNumber" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </FormItem>
              <FormItem>
                <label htmlFor="email">E-mail:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <label htmlFor="zipCode">CEP</label>
                <Field type="text" id="zipCode" name="zipCode" />
                <ErrorMessage name="zipCode" component="div" />
              </FormItem>
              <SearchButton>Buscar</SearchButton>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <label htmlFor="street">Rua</label>
                <Field type="text" id="street" name="street" />
                <ErrorMessage name="street" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <label htmlFor="number">Nº</label>
                <Field type="text" id="number" name="number" />
                <ErrorMessage name="number" component="div" />
              </FormItem>
              <FormItem>
                <label htmlFor="complement">Complemento</label>
                <Field type="text" id="complement" name="complement" />
                <ErrorMessage name="complement" component="div" />
              </FormItem>
            </FormDividerWrapper>
            <FormDividerWrapper>
              <FormItem>
                <label htmlFor="neighborhood">Bairro</label>
                <Field type="text" id="neighborhood" name="neighborhood" />
                <ErrorMessage name="neighborhood" component="div" />
              </FormItem>
              <FormItem>
                <label htmlFor="city">Complemento</label>
                <Field type="text" id="city" name="city" />
                <ErrorMessage name="city" component="div" />
              </FormItem>
              <FormItem>
                <label htmlFor="state">Estado</label>
                <Field type="text" id="state" name="state" />
                <ErrorMessage name="state" component="div" />
              </FormItem>
            </FormDividerWrapper>
          </Form>
        </Formik>
      </PaymentFormCard>
    </PaymentFormWrapper>
  );
}
