import { Checkbox } from "@mui/material";
import { StyledForm } from "../../styles/components/form";

interface iVarFormProps {
  children: React.ReactNode;
  checkbox?: boolean;
  label: string;
  onChangeFunction: (event: any) => void;
}

export const VarForm = ({
  children,
  checkbox,
  label,
  onChangeFunction,
}: iVarFormProps) => (
  <StyledForm onChange={onChangeFunction}>
    {checkbox ? (
      <div>
        <Checkbox
          onChange={() => {
            console.log("teste");
          }}
        />
        <span>{label}</span>
      </div>
    ) : (
      <span>{label}</span>
    )}
    {children}
  </StyledForm>
);
