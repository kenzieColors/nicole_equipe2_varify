import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/RegisterForm";
import Header from "../../components/Header";
import StyledRegisterPage from "./style";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <StyledRegisterPage>
        <div className="container__registerForm">
          <h2 className="title-1">Crie sua conta</h2>
          <RegisterForm />
        </div>
      </StyledRegisterPage>
    </>
  );
};

export default RegisterPage;
