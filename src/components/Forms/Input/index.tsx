import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { FieldSet, StyledTextField } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "number";
  children?: React.ReactNode;
  id?: string;
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, type, children, id, register, error }: IInputProps) => (
  <FieldSet>
    <StyledTextField label={label} id={id} type={type} {...register}>
      {children}
    </StyledTextField>

    {error ? <span>Erro</span> : null}
  </FieldSet>
);

export default Input;
