import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const Input = ({ label, type, register, error }: IInputProps) => (
  <fieldset>
    <fieldset label={label} type={type} {...register} />
    {error ? <span>Erro</span> : null}
  </fieldset>
);
