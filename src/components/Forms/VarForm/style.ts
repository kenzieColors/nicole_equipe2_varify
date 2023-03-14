import styled, { css } from "styled-components";

export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;

  border: 2px solid var(--color-brand-4);
  border-radius: var(--radius-default);

  color: var(--color-brand-4);

  padding: 1rem;
  width: 100%;

  margin: 4px;

  font-weight: var(--font-weight-3);

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .check {
    color: var(--color-brand-1);
  }

  @media (min-width: 769px) {
    legend {
      font-size: 1.2rem;
    }
  }
`;
