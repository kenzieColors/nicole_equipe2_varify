import styled from "styled-components";

const StyledUserSavedVars = styled.ul`
  border: 2px solid var(--color-brand-4);
  margin: 15px;
  padding: 20px;
  border-radius: var(--radius-default);

  min-width: 260px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export default StyledUserSavedVars;
