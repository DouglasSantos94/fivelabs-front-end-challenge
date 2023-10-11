import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  cpf: Yup.string().required("CPF é obrigatório"),
  email: Yup.string().email("Digite um e-mail válido").required("E-mail é obrigatório"),
  phoneNumber: Yup.string().required("Telefone é obrigatório"),
  cep: Yup.string().required("Digite o seu CEP"),
  street: Yup.string().required("Digite o nome da rua"),
  number: Yup.string().required("Digite o número"),
  complement: Yup.string(),
  neighborhood: Yup.string().required("Digite o nome do bairro"),
  city: Yup.string().required("Digite a cidade"),
  state: Yup.string().required("Digite o estado"),
  cardNumber: Yup.string().required("Digite o número do cartão"),
  owner: Yup.string().required("Digite o nome do titular"),
  valid: Yup.string().required("Digite a data de validade"),
  code: Yup.string().required("Digite o código verificador")
});
