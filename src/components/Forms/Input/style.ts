import styled from "styled-components";
import { TextField } from "@mui/material";

export const FieldSet = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border: none;

  span {
    font-size: 9px;
    font-weight: var(--font-weight-4);
    color: var(--grey-600);
  }
`;

export const StyledTextField = styled(TextField)`
  input {
    background-color: var(--grey-100);
    border-radius: 8px;
    color: var(--grey-600);
    padding: 14px 12px;
  }
  label {
    color: var(--grey-600);

    font-size: 1rem;
  }
`;
