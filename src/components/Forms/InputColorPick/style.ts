import styled, { css } from "styled-components";
import { TextField } from "@mui/material";

export const FieldSet = styled.fieldset`
  position: relative;
  display: flex;
  width: 100%;

  .react-colorful {
    position: absolute;
    z-index: 1;
    right: 51px;
  }

  div > div > input {
    width: 100%;
  }

  .colorPickButton {
    position: absolute;
    right: 3px;
    align-self: center;
    width: 45px;
    height: 45px;
    background-color: #ffffff;
    border-radius: 5px;
  }

  ${({ color }) => {
    return css`
    .colorPickButton{
      background-color: ${color}`;
  }}
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  input {
    background-color: var(--grey-100);
    color: var(--grey-0);
    border-radius: 8px;

    padding: 14px 12px;
  }
  label {
    color: #8b8b8b;

    font-size: 1rem;
  }
`;
