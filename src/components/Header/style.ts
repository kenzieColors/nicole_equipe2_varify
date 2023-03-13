import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopHeader = styled.header`
  width: 100%;

  margin: 0 auto;
  padding: 20px;

  border-bottom: solid 1px var(--grey-600);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1000px) {
    .container {
      /* max-width: 1000px; */
      width: 1000px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
    }
  }
  nav {
    padding: 12px;
  }

  @media (min-width: 426px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      width: 100vw;
    }
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;

  color: var(--color-brand-3);
  font-size: 3.4rem;
  font-weight: var(--font-weight-1);

  display: flex;
  align-items: center;
`;

export const TopLink = styled.a`
  color: var(--color-brand-4);

  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 200;

  padding: 10px 6px;
  margin-right: 8px;

  border-radius: 4px;
  border: 1px solid var(--color-brand-4);
  &:hover {
    background-color: var(--color-brand-4);
    color: var(--grey-100);
  }
`;
