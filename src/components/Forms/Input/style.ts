import styled from "styled-components";
import { TextField } from "@mui/material";

export const FieldSet = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border: none;
`;

export const StyledTextField = styled(TextField)`
  input {
    background-color: #3f3f3f;
    border-radius: 8px;
    /* width: 100%; */

    padding: 14px 12px;
  }
  label {
    color: #8b8b8b;

    font-size: 1rem;
  }
`;
