import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";

interface IInputProps {
  label: string;
  id?: string;
  type: "text" | "email" | "password" | "number";
  register?: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ label, id, type, register, error }: IInputProps) => (
  <fieldset>
    <TextField label={label} id={id} type={type} {...register} />
    {error ? <span>Erro</span> : null}
  </fieldset>
);
