import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  /* margin: 10px; */
  height: 48px;
  width: 100%;
  padding: 0 30px;
  border-radius: var(--radius-default);
  font-size: 1rem;
  font-weight: var(--font-weight-2);
  background-color: var(--color-brand-1);
  border: none;
  color: var(--grey-400);
  /* display: flex; */

  :hover {
    filter: brightness(0.9);
    color: var(--grey-100);
  }
  :disabled {
    background-color: var(--grey-200);
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        :hover {
          filter: none;
          color: var(--grey-400);
          cursor: auto;
        }
      `;
    }
  }};
`;
