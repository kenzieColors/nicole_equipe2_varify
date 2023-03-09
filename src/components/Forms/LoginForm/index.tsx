import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginFormValues } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Input } from "../../Input/input";

export const LoginForm = () => {
const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>();

const submit: SubmitHandler<ILoginFormValues> = (formData) => {
userLogin(formData)
};

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input label="Seu e-mail" type="email" register={register("email")} />
      <Input
        label="Sua senha"
        type="password"
        register={register("password")}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};
