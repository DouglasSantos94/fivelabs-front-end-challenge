import { Formik, Form, Field, ErrorMessage } from "formik";
import { PaymentFormCard } from "../../components/Card";
import { Title } from "../../components/Text";
import { PaymentFormWrapper } from "./styles";
import { formSchema } from "../../schemas/formSchema";

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
          <Form></Form>
        </Formik>
      </PaymentFormCard>
    </PaymentFormWrapper>
  );
}
