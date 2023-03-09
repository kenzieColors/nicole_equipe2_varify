import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IRegisterFormValues } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Input } from "../../Input/input";
import { schema } from "./validations";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: yupResolver(schema),
  });

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Nome" type="text" register={register("name")} />
      <Input label="E-mail" type="email" register={register("email")} />
      <Input label="Senha" type="password" register={register("password")} />
      <button type="submit">Cadastre-se</button>
    </form>
  );
};
