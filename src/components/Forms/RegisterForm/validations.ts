import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup
      .string()
      .email("Por favor, insira um e-mail válido")
      .required("Endereço de e-mail é obrigatório"),
    password: yup
      .string()
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
      .required("Senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      )
      .required("Confirmar senha é obrigatório"),
  })
  .required();
