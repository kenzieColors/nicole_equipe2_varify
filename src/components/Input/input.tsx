import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { TextField } from "@mui/material";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "number";
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ label, type, register, error }: IInputProps) => (
  <fieldset>
    <TextField label={label} type={type} {...register} />
    {error ? <span>Erro</span> : null}
  </fieldset>
);
