import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";
import { StyleTextField } from "./textfield";

interface IInputProps {
  label: string;
  id?: string;
  type: "text" | "email" | "password" | "number";
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, id, type, register, error }: IInputProps) => (
  <fieldset>
    <StyleTextField label={label} id={id} type={type} {...register} />

    {error ? <span>Erro</span> : null}
  </fieldset>
);

export default Input;
