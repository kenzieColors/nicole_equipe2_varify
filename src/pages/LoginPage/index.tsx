// import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
// import StyledLoginPage from "../../components/Forms/LoginForm/style";
import Header from "../../components/Header";
import StyledLoginPage from "./style";
// import StyledLoginPage from "./style";

const LoginPage = () => {
  console.log()

  return(
  <div>
    <Header />
    <StyledLoginPage>
      <div className="container__loginForm">
        <h2 className="title-1">Faça seu login</h2>
        <LoginForm />
      </div>
    </StyledLoginPage>
  </div>)
}
export default LoginPage;
