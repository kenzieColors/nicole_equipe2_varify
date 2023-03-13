import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types";
import { IRegisterFormValues } from "../../../providers/@types";
import { UserContext } from "../../../providers/UserContext";
import Input from "../Input";
import { schema } from "./validations";
import { Link } from "react-router-dom";
import StyledRegisterForm from "./style";
// import Header from "../../Header";

const RegisterForm = () => {
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
    console.log(formData);
  };

  console.log(errors);

  return (
    <>
      {/* <Header /> */}
      {/* <div className="container__registerForm"> */}
      <StyledRegisterForm onSubmit={handleSubmit(submit)}>
        <Input label="E-mail" type="email" register={register("email")} />
        <Input label="Senha" type="password" register={register("password")} />
        <Input label="Nome" type="text" register={register("name")} />

        <button type="submit">Cadastre-se</button>

        <p>
          Já tem uma conta?{" "}
          <Link className="styledLink" to="/login">
            Login
          </Link>
        </p>
      </StyledRegisterForm>
      {/* </div> */}
    </>
  );
};

export default RegisterForm;
