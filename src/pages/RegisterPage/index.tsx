import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/Forms/RegisterForm"


export const RegisterPage = () => {
  return (
    <>
    <Link to="/login">Voltar</Link>
      <RegisterForm />
    </>
  )
}

