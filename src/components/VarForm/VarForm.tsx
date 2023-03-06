import { Checkbox } from "@mui/material";
import { StyledForm } from "../../styles/components/form";

interface iVarFormProps {
  children: React.ReactNode;
  checkbox?: boolean;
  label: string;
}

export const VarForm = ({ children, checkbox, label }: iVarFormProps) => (
  <StyledForm>
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
