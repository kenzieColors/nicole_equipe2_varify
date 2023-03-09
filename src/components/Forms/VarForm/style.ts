import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;

  border: 2px solid #ef8c00;
  border-radius: 5px;

  color: #ef8c00;

  width: 100%;

  font-weight: 300;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
