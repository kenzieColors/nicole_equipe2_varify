import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register">Cadastre-se</Link>
    </>
  );
};

export default LoginPage;
