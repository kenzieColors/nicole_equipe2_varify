import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";
import { StyleTextField } from "./textfield";
import { FieldSet } from "./style";

interface IInputProps {
  label: string;
  id?: string;
  type: "text" | "email" | "password" | "number";
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ label, id, type, register, error }: IInputProps) => (
  <FieldSet>
    <StyleTextField label={label} id={id} type={type} {...register} />

    {error ? <span>{error.message}</span> : null}
  </FieldSet>
);

export default Input;
