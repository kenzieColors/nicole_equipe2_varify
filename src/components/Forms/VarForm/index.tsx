import { useState } from "react";
import { Checkbox } from "@mui/material";
import { StyledFieldSet } from "./style";

interface iVarFormProps {
  children: React.ReactNode;
  checkbox?: boolean;
  name: string;
  onChangeFunction?: (event: any) => void;
}

const VarForm = ({
  children,
  checkbox,
  name,
  onChangeFunction,
}: iVarFormProps) => {
  const [formDisable, setFormDisable] = useState(false);

  return (
    <StyledFieldSet disabled={formDisable}>
      {checkbox ? (
        <>
          <legend>
            <Checkbox
              className="check"
              onChange={() => {
                setFormDisable(!formDisable);
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
};

export default VarForm;
