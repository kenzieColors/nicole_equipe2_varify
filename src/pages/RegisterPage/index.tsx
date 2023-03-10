import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../../components/Forms/RegisterForm";
import Header from "../../components/Header";
import StyledRegisterPage from "./style";
import varify from "../../assets/varify.png";
import { LogoLink, TopLink } from "../../components/Header/style";

const RegisterPage = () => {
  return (
    <>
      <Header>
        <div className="container">
          <div>
            <LogoLink to="/">
              <img src={varify} alt="" className="logo" />
            </LogoLink>
          </div>

          <nav>
            <TopLink href="/login">Login</TopLink>
          </nav>
        </div>
      </Header>
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
