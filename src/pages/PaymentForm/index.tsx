import { useFormik } from "formik";
import { PaymentFormCard } from "../../components/Card";
import { Paragraph, Title } from "../../components/Text";
import { PaymentFormWrapper } from "./styles";
import { formSchema } from "../../schemas/formSchema";
import { FormDividerWrapper, SmallFormDividerWrapper } from "../../components/FormDivider";
import { FormItem, MediumFormItem, SmallFormItem } from "../../components/FormItem";
import { SearchAddressButton, SubmitPaymentButton } from "../../components/Button";
import { Label } from "../../components/Label";
import { FormInput, SmallFormInput } from "../../components/Input";
import { useEffect, useState } from "react";
import { useCep } from "../../hooks/useCep";
import { FormError } from "../../components/FormError";

export default function PaymentForm() {
  const [cep, setCep] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      cpf: "",
      email: "",
      phoneNumber: "",
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      cardNumber: "",
      owner: "",
      valid: "",
      code: ""
    },
    initialErrors: {},
    onSubmit: values => console.log(values),
    validationSchema: formSchema,
    enableReinitialize: true
  });

  const { address, error } = useCep(cep);

  useEffect(() => {
    const changeAddressValues = async () => {
      await formik.setFieldValue("street", address.logradouro);
      await formik.setFieldValue("complement", address.complemento);
      await formik.setFieldValue("neighborhood", address.bairro);
      await formik.setFieldValue("city", address.localidade);
      await formik.setFieldValue("state", address.uf);
    };
    void changeAddressValues();
  }, [address]);

  return (
    <PaymentFormWrapper>
      <PaymentFormCard>
        <Title>Formulário de pagamento</Title>
        <form style={{ textAlign: "center" }} onSubmit={formik.handleSubmit}>
          <Paragraph>Dados pessoais</Paragraph>
          <FormDividerWrapper>
            <FormItem>
              <Label htmlFor="name">
                Nome
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Label>
              {formik.errors.name ? <FormError>{formik.errors.name}</FormError> : null}
            </FormItem>
            <FormItem>
              <Label htmlFor="cpf">
                CPF
                <FormInput type="text" id="cpf" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} />
              </Label>
              {formik.errors.cpf ? <FormError>{formik.errors.cpf}</FormError> : null}
            </FormItem>
          </FormDividerWrapper>
          <FormDividerWrapper>
            <FormItem>
              <Label htmlFor="phoneNumber">
                Telefone
                <FormInput
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                />
              </Label>
              {formik.errors.phoneNumber ? <FormError>{formik.errors.phoneNumber}</FormError> : null}
            </FormItem>
            <FormItem>
              <Label htmlFor="email">
                E-mail
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Label>
              {formik.errors.email ? <FormError>{formik.errors.email}</FormError> : null}
            </FormItem>
          </FormDividerWrapper>
          <SmallFormDividerWrapper>
            <SmallFormItem>
              <Label htmlFor="cep">
                CEP
                <FormInput type="text" id="cep" name="cep" onChange={formik.handleChange} value={formik.values.cep} />
              </Label>
              {formik.errors.cep ? <FormError>{formik.errors.cep}</FormError> : null}
            </SmallFormItem>
            <SearchAddressButton onClick={() => setCep(formik.values.cep)}>Buscar</SearchAddressButton>
          </SmallFormDividerWrapper>
          <FormDividerWrapper>
            <FormItem>
              <Label htmlFor="street">
                Rua
                <FormInput
                  type="text"
                  id="street"
                  name="street"
                  onChange={formik.handleChange}
                  value={formik.values.street}
                />
              </Label>
              {formik.errors.street ? <FormError>{formik.errors.street}</FormError> : null}
            </FormItem>
            <SmallFormItem>
              <Label htmlFor="number">
                Nº
                <SmallFormInput
                  type="text"
                  id="number"
                  name="number"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                />
              </Label>
              {formik.errors.number ? <FormError>{formik.errors.number}</FormError> : null}
            </SmallFormItem>
            <MediumFormItem>
              <Label htmlFor="complement">
                Complemento
                <FormInput
                  type="text"
                  id="complement"
                  name="complement"
                  onChange={formik.handleChange}
                  value={formik.values.complement}
                />
              </Label>
              {formik.errors.complement ? <FormError>{formik.errors.complement}</FormError> : null}
            </MediumFormItem>
          </FormDividerWrapper>
          <FormDividerWrapper>
            <FormItem>
              <Label htmlFor="neighborhood">
                Bairro
                <FormInput
                  type="text"
                  id="neighborhood"
                  name="neighborhood"
                  onChange={formik.handleChange}
                  value={formik.values.neighborhood}
                />
              </Label>
              {formik.errors.neighborhood ? <FormError>{formik.errors.neighborhood}</FormError> : null}
            </FormItem>
            <MediumFormItem>
              <Label htmlFor="city">
                Cidade
                <FormInput
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
              </Label>
              {formik.errors.city ? <FormError>{formik.errors.city}</FormError> : null}
            </MediumFormItem>
            <SmallFormItem>
              <Label htmlFor="state">
                Estado
                <SmallFormInput
                  type="text"
                  id="state"
                  name="state"
                  onChange={formik.handleChange}
                  value={formik.values.state}
                />
              </Label>
              {formik.errors.state ? <FormError>{formik.errors.state}</FormError> : null}
            </SmallFormItem>
          </FormDividerWrapper>
          <Paragraph>Dados de pagamento</Paragraph>
          <FormDividerWrapper>
            <FormItem>
              <Label htmlFor="cardNumber">
                Nº do cartão
                <FormInput
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={formik.handleChange}
                  value={formik.values.cardNumber}
                />
              </Label>
              {formik.errors.cardNumber ? <FormError>{formik.errors.cardNumber}</FormError> : null}
            </FormItem>
            <FormItem>
              <Label htmlFor="owner">
                Titular
                <FormInput
                  type="text"
                  id="owner"
                  name="owner"
                  onChange={formik.handleChange}
                  value={formik.values.owner}
                />
              </Label>
              {formik.errors.owner ? <FormError>{formik.errors.owner}</FormError> : null}
            </FormItem>
          </FormDividerWrapper>
          <FormDividerWrapper>
            <SmallFormItem>
              <Label htmlFor="valid">
                Validade
                <SmallFormInput
                  type="text"
                  id="valid"
                  name="valid"
                  onChange={formik.handleChange}
                  value={formik.values.valid}
                />
              </Label>
              {formik.errors.valid ? <FormError>{formik.errors.valid}</FormError> : null}
            </SmallFormItem>
            <SmallFormItem>
              <Label htmlFor="code">
                CVV
                <SmallFormInput
                  type="text"
                  id="code"
                  name="code"
                  onChange={formik.handleChange}
                  value={formik.values.code}
                />
              </Label>
              {formik.errors.code ? <FormError>{formik.errors.code}</FormError> : null}
            </SmallFormItem>
          </FormDividerWrapper>
          <SubmitPaymentButton type="submit">Finalizar compra</SubmitPaymentButton>
        </form>
      </PaymentFormCard>
    </PaymentFormWrapper>
  );
}
