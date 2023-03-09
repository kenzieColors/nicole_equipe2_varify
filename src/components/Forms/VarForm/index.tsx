import { Checkbox } from "@mui/material";
import { StyledFieldSet } from "./style";

interface iVarFormProps {
  children: React.ReactNode;
  checkbox?: boolean;
  name: string;
  onChangeFunction: (event: any) => void;
}

const VarForm = ({
  children,
  checkbox,
  name,
  onChangeFunction,
}: iVarFormProps) => (
  <StyledFieldSet>
    {checkbox ? (
      <>
        <legend>
          <Checkbox
            onChange={() => {
              console.log("teste");
            }}
          />
          {name}
        </legend>
        <form onChange={onChangeFunction}>{children}</form>
      </>
    ) : (
      <>
        <legend>{name}</legend>
        <form onChange={onChangeFunction}>{children}</form>
      </>
    )}
  </StyledFieldSet>
);

export default VarForm;
