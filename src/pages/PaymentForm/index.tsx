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
        <form onSubmit={formik.handleSubmit}>
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
              {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            </FormItem>
            <FormItem>
              <Label htmlFor="cpf">
                CPF
                <FormInput type="text" id="cpf" name="cpf" onChange={formik.handleChange} value={formik.values.cpf} />
              </Label>
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
            </FormItem>
          </FormDividerWrapper>
          <SmallFormDividerWrapper>
            <SmallFormItem>
              <Label htmlFor="cep">
                CEP
                <FormInput type="text" id="cep" name="cep" onChange={formik.handleChange} value={formik.values.cep} />
              </Label>
            </SmallFormItem>
            <SearchAddressButton onClick={() => setCep(formik.values.cep)}>Buscar</SearchAddressButton>
          </SmallFormDividerWrapper>
          <FormDividerWrapper>
            <FormItem>
              <Label htmlFor="street">Rua</Label>
              <FormInput
                type="text"
                id="street"
                name="street"
                onChange={formik.handleChange}
                value={formik.values.street}
              />
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
            </SmallFormItem>
          </FormDividerWrapper>
          <SubmitPaymentButton type="submit">Finalizar compra</SubmitPaymentButton>
        </form>
      </PaymentFormCard>
    </PaymentFormWrapper>
  );
}
