import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <LoginForm />
      <Link to="/register">Cadastre-se</Link>
    </>
  );
};


