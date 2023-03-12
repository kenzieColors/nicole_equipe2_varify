// import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
// import StyledLoginPage from "../../components/Forms/LoginForm/style";
import Header from "../../components/Header";
import { LogoLink, TopLink } from "../../components/Header/style";
import StyledLoginPage from "./style";
import varify from "../../assets/varify.png";
// import StyledLoginPage from "./style";

const LoginPage = () => {
  return (
    <div>
      <Header>
        <div className="container">
          <div>
            <LogoLink to="/">
              <img src={varify} alt="" className="logo" />
            </LogoLink>
          </div>

          <nav>
            <TopLink href="/register">Cadastre-se</TopLink>
          </nav>
        </div>
      </Header>
      <StyledLoginPage>
        <div className="container__loginForm">
          <h2 className="title-1">Faça seu login</h2>
          <LoginForm />
        </div>
      </StyledLoginPage>
    </div>
  );
};
export default LoginPage;
